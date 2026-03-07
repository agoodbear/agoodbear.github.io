#!/usr/bin/env swift

import Cocoa
import Foundation

let iPicBundleIdentifier = "net.toolinbox.ipic"
let iPicURLScheme = "ipic://"
let iPicPasteboardName = NSPasteboard.Name(rawValue: "net.toolinbox.ipic.pasteboard")
let pasteboardTypeImage = NSPasteboard.PasteboardType(rawValue: "net.toolinbox.ipic.pasteboard.iPicImage")
let pasteboardTypeUploadResult = NSPasteboard.PasteboardType(rawValue: "net.toolinbox.ipic.pasteboard.iPicUploadResult")
let sharedImageClassName = "net.toolinbox.iPic.iPicImage"
let sharedResultClassName = "net.toolinbox.iPic.iPicUploadResult"
let uploadTimeoutSeconds: TimeInterval = 45

final class IPicImage: NSObject, NSCoding {
  private static let idKey = "id"
  private static let imageFilePathKey = "imageFilePath"
  private static let imageDataKey = "imageData"
  private static let versionKey = "version"
  private static let jsonKey = "json"

  var id = UUID().uuidString
  var imageFilePath: String?
  var imageData: Data?
  var version = 1
  var json: Any?

  init(imageFilePath: String) {
    self.imageFilePath = imageFilePath
  }

  required init?(coder: NSCoder) {
    super.init()
    id = coder.decodeObject(forKey: Self.idKey) as? String ?? id
    imageFilePath = coder.decodeObject(forKey: Self.imageFilePathKey) as? String
    imageData = coder.decodeObject(forKey: Self.imageDataKey) as? Data
    version = coder.decodeInteger(forKey: Self.versionKey)
    json = coder.decodeObject(forKey: Self.jsonKey)
  }

  func encode(with coder: NSCoder) {
    coder.encode(id, forKey: Self.idKey)
    coder.encode(imageFilePath, forKey: Self.imageFilePathKey)
    coder.encode(imageData, forKey: Self.imageDataKey)
    coder.encode(version, forKey: Self.versionKey)
    coder.encode(json, forKey: Self.jsonKey)
  }
}

final class IPicUploadResult: NSObject, NSCoding {
  private static let idKey = "id"
  private static let imageLinkKey = "imageLink"
  private static let errorKey = "error"

  var id = ""
  var imageLink: String?
  var error: NSError?

  required init?(coder: NSCoder) {
    super.init()
    id = coder.decodeObject(forKey: Self.idKey) as? String ?? ""
    imageLink = coder.decodeObject(forKey: Self.imageLinkKey) as? String
    error = coder.decodeObject(forKey: Self.errorKey) as? NSError
  }

  func encode(with coder: NSCoder) {
    coder.encode(id, forKey: Self.idKey)
    coder.encode(imageLink, forKey: Self.imageLinkKey)
    coder.encode(error, forKey: Self.errorKey)
  }
}

func compactUserInfo(_ info: [String: Any]) -> String {
  guard !info.isEmpty else {
    return ""
  }
  let mapped = info.map { key, value in
    return "\(key)=\(String(describing: value))"
  }
  return mapped.joined(separator: ", ")
}

func printJSON(_ object: [String: Any], exitCode: Int32) -> Never {
  if let data = try? JSONSerialization.data(withJSONObject: object, options: []),
     let text = String(data: data, encoding: .utf8) {
    print(text)
  } else {
    print("{\"ok\":false,\"error\":\"Failed to encode JSON.\"}")
  }
  Foundation.exit(exitCode)
}

func fail(_ message: String, details: String = "") -> Never {
  var payload: [String: Any] = [
    "ok": false,
    "error": message,
  ]
  if !details.isEmpty {
    payload["details"] = details
  }
  printJSON(payload, exitCode: 1)
}

func launchIPicIfNeeded() throws {
  if !NSRunningApplication.runningApplications(withBundleIdentifier: iPicBundleIdentifier).isEmpty {
    return
  }
  guard let schemeURL = URL(string: iPicURLScheme) else {
    throw NSError(domain: "write-studio.ipic", code: -1, userInfo: [NSLocalizedDescriptionKey: "Invalid iPic URL scheme."])
  }

  if #available(macOS 11.0, *) {
    let config = NSWorkspace.OpenConfiguration()
    config.activates = false

    let semaphore = DispatchSemaphore(value: 0)
    var openError: Error?
    NSWorkspace.shared.open(schemeURL, configuration: config) { _, error in
      openError = error
      semaphore.signal()
    }
    _ = semaphore.wait(timeout: .now() + 5)

    if let openError {
      throw openError
    }
  } else {
    try NSWorkspace.shared.open(schemeURL, options: .withoutActivation, configuration: [:])
  }
}

func writeImageToPasteboard(_ image: IPicImage) -> Bool {
  let pasteboard = NSPasteboard(name: iPicPasteboardName)
  pasteboard.clearContents()

  NSKeyedArchiver.setClassName(sharedImageClassName, for: IPicImage.self)
  guard let data = try? NSKeyedArchiver.archivedData(withRootObject: image, requiringSecureCoding: false) else {
    return false
  }

  let item = NSPasteboardItem()
  item.setData(data, forType: pasteboardTypeImage)
  return pasteboard.writeObjects([item])
}

func parseUploadResult(_ pasteboard: NSPasteboard) -> IPicUploadResult? {
  guard let data = pasteboard.data(forType: pasteboardTypeUploadResult) else {
    return nil
  }
  NSKeyedUnarchiver.setClass(IPicUploadResult.self, forClassName: sharedResultClassName)
  return try? NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(data) as? IPicUploadResult
}

func uploadOneImage(path: String) -> String {
  let imageURL = URL(fileURLWithPath: path)
  guard let imageData = try? Data(contentsOf: imageURL), NSImage(data: imageData) != nil else {
    fail("Invalid image file.", details: path)
  }

  do {
    try launchIPicIfNeeded()
  } catch {
    fail("Cannot launch iPic. Please ensure iPic is installed.", details: String(describing: error))
  }

  let image = IPicImage(imageFilePath: path)
  // Some iPic builds may not be able to read arbitrary temp file paths under sandbox rules.
  // Provide raw image data as a fallback transport channel.
  image.imageData = imageData
  guard writeImageToPasteboard(image) else {
    fail("Failed to write image request to iPic pasteboard.")
  }

  let pasteboard = NSPasteboard(name: iPicPasteboardName)
  var lastChange = pasteboard.changeCount
  let deadline = Date().addingTimeInterval(uploadTimeoutSeconds)

  while Date() < deadline {
    RunLoop.current.run(until: Date().addingTimeInterval(0.12))
    let current = pasteboard.changeCount
    if current == lastChange {
      continue
    }
    lastChange = current
    guard let result = parseUploadResult(pasteboard) else {
      continue
    }
    if result.id != image.id {
      continue
    }
    if let imageLink = result.imageLink, !imageLink.isEmpty {
      return imageLink
    }
    if let error = result.error {
      let codePart = "[\(error.domain):\(error.code)]"
      let userInfoPart = compactUserInfo(error.userInfo)
      var detail = "\(codePart) \(error.localizedDescription)"
      if !userInfoPart.isEmpty {
        detail += " | userInfo: \(userInfoPart)"
      }
      fail("iPic upload failed.", details: detail)
    }
    fail("iPic upload failed.")
  }

  fail("iPic upload timeout.")
}

let args = Array(CommandLine.arguments.dropFirst())
if args.isEmpty {
  fail("Missing image file path.")
}

var results = [[String: Any]]()
for input in args {
  let expanded = NSString(string: input).expandingTildeInPath
  let url = uploadOneImage(path: expanded)
  results.append([
    "file": expanded,
    "url": url,
  ])
}

let payload: [String: Any] = [
  "ok": true,
  "results": results,
  "url": (results.first?["url"] as? String) ?? "",
]
printJSON(payload, exitCode: 0)

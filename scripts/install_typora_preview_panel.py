#!/usr/bin/env python3
from __future__ import annotations

import plistlib
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
SERVICE_SCRIPT_PATH = REPO_ROOT / "scripts" / "typora_preview_panel_launcher.sh"
SERVICE_DIR = Path.home() / "Library" / "Services" / "Typora Preview Panel.workflow" / "Contents"
DOCUMENT_PATH = SERVICE_DIR / "document.wflow"
INFO_PATH = SERVICE_DIR / "Info.plist"

SERVICE_SCRIPT_SOURCE = SERVICE_SCRIPT_PATH.read_text(encoding="utf-8")


def build_document() -> dict:
    return {
        "actions": [
            {
                "action": {
                    "ActionBundlePath": "/System/Library/Automator/Run Shell Script.action",
                    "ActionName": "Run Shell Script",
                    "ActionParameters": {
                        "COMMAND_STRING": SERVICE_SCRIPT_SOURCE,
                        "CheckedForUserDefaultShell": True,
                        "inputMethod": 0,
                        "shell": "/bin/zsh",
                        "source": "",
                    },
                    "AMAccepts": {
                        "Container": "List",
                        "Optional": True,
                        "Types": ["com.apple.cocoa.string"],
                    },
                    "AMActionVersion": "2.0.1",
                    "AMParameterProperties": {
                        "COMMAND_STRING": {},
                        "CheckedForUserDefaultShell": {},
                        "inputMethod": {},
                        "shell": {},
                        "source": {},
                    },
                    "AMProvides": {
                        "Container": "List",
                        "Types": ["com.apple.cocoa.string"],
                    },
                    "Application": ["Automator"],
                    "arguments": {
                        "0": {
                            "default value": "",
                            "name": "COMMAND_STRING",
                            "required": "0",
                            "type": "0",
                            "uuid": "0",
                        }
                    },
                    "BundleIdentifier": "com.apple.RunShellScript",
                    "CanShowSelectedItemsWhenRun": False,
                    "CanShowWhenRun": True,
                    "Category": ["AMCategoryUtilities"],
                    "CFBundleVersion": "2.0.1",
                    "Class Name": "RunShellScriptAction",
                    "InputUUID": "A4C5BFA1-9E95-4E8E-9C20-DCEAB5121001",
                    "isViewVisible": True,
                    "Keywords": ["Run"],
                    "location": "309.500000:241.000000",
                    "nibPath": "/System/Library/Automator/Run Shell Script.action/Contents/Resources/English.lproj/main.nib",
                    "OutputUUID": "16E4D062-F407-4728-9C3A-812EC26164B8",
                    "UnlocalizedApplications": ["Automator"],
                    "UUID": "FF5D32A8-1990-42A3-9057-6B58EF2D1730",
                },
                "isViewVisible": True,
            }
        ],
        "AMApplicationBuild": "492",
        "AMApplicationVersion": "2.10",
        "AMDocumentVersion": "2",
        "workflowMetaData": {
            "applicationBundleID": "abnerworks.Typora",
            "applicationBundleIDsByPath": {"/Applications/Typora.app": "abnerworks.Typora"},
            "applicationPath": "/Applications/Typora.app",
            "applicationPaths": ["/Applications/Typora.app"],
            "inputTypeIdentifier": "com.apple.Automator.nothing",
            "outputTypeIdentifier": "com.apple.Automator.text",
            "presentationMode": 11,
            "processesInput": 0,
            "serviceApplicationBundleID": "abnerworks.Typora",
            "serviceApplicationPath": "/Applications/Typora.app",
            "serviceInputTypeIdentifier": "com.apple.Automator.nothing",
            "serviceOutputTypeIdentifier": "com.apple.Automator.text",
            "serviceProcessesInput": 0,
            "systemImageName": "NSQuickLookTemplate",
            "useAutomaticInputType": 0,
            "workflowTypeIdentifier": "com.apple.Automator.servicesMenu",
        },
    }


def build_info() -> dict:
    return {
        "NSServices": [
            {
                "NSBackgroundColorName": "background",
                "NSBackgroundSystemColorName": "systemGrayColor",
                "NSIconName": "NSQuickLookTemplate",
                "NSMenuItem": {"default": "Typora Preview Panel"},
                "NSMessage": "runWorkflowAsService",
                "NSRequiredContext": {"NSApplicationIdentifier": "abnerworks.Typora"},
                "NSReturnTypes": ["public.utf8-plain-text"],
            }
        ]
    }


def main() -> int:
    SERVICE_DIR.mkdir(parents=True, exist_ok=True)
    with DOCUMENT_PATH.open("wb") as fh:
        plistlib.dump(build_document(), fh, fmt=plistlib.FMT_XML, sort_keys=False)
    with INFO_PATH.open("wb") as fh:
        plistlib.dump(build_info(), fh, fmt=plistlib.FMT_XML, sort_keys=False)
    print(f"Installed Typora Preview Panel to {SERVICE_DIR.parent}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/bin/zsh
set -eu

selected_text="$(cat)"

get_typora_selected_text() {
	/usr/bin/osascript <<'APPLESCRIPT' 2>/dev/null || true
tell application "System Events"
	if not (exists process "Typora") then return ""
	tell process "Typora"
		if frontmost is false then return ""
		try
			set focusedElement to value of attribute "AXFocusedUIElement"
			set selectedText to value of attribute "AXSelectedText" of focusedElement
			if selectedText is missing value then return ""
			return selectedText
		on error
			return ""
		end try
	end tell
end tell
APPLESCRIPT
}

build_image_layout_template() {
	local layout="$1"
	local gap="14"
	local -a rows
	local -a lines
	local -a labels=("第一張圖" "第二張圖" "第三張圖" "第四張圖" "第五張圖" "第六張圖")
	local cols label
	local image_index=1
	local row_index=1

	case "$layout" in
		"2") rows=(2) ;;
		"3") rows=(3) ;;
		"4") rows=(4) ;;
		"2-2") rows=(2 2) ;;
		"3-2") rows=(3 2) ;;
		*) return 1 ;;
	esac

	for cols in "${rows[@]}"; do
		lines+=("{{< imgrow cols=\"$cols\" gap=\"$gap\" >}}")
		for ((i=1; i<=cols; i++)); do
			label="${labels[image_index]:-第${image_index}張圖}"
			lines+=("{{< imgcol src=\"/images/ipic/image-${image_index}.png\" alt=\"$label\" caption=\"${label}圖說\" >}}")
			((image_index++))
		done
		lines+=("{{< /imgrow >}}")
		if (( row_index < ${#rows[@]} )); then
			lines+=("")
		fi
		((row_index++))
	done

	printf '%s\n' "${lines[@]}"
}

build_flame_notice_template() {
	local body="${selected_text//$'\r'/}"
	if [[ -z "$trimmed_text" ]]; then
		body=$'1. 第一個重點\n2. 第二個重點\n3. 第三個重點'
	fi

	printf '%s\n\n%s\n\n%s\n' '{{% notice flame "學習重點" %}}' "$body" '{{% /notice %}}'
}

build_pdf_footnote_template() {
	local body="${selected_text//$'\r'/}"
	if [[ -z "$body" ]]; then
		body="請填右側重點整理"
	fi

	printf '%s\n%s\n%s\n' \
		'句子內容可在這裡接 footnote{{< pdf-footnote trigger="1" pdf="/pdfs/example.pdf" page="1" x="18" y="24" w="26" h="8" title="請填 PDF 標題" quote="請填 PDF 原文摘句" >}}' \
		"$body" \
		'{{< /pdf-footnote >}}'
}

build_guideline_shelf_template() {
	cat <<'EOF'
{{< guideline-shelf title="Guideline PDF Shelf" intro="把這篇文章最常引用的 guideline / statement 先放在最上方，讀者可先建立全局參考。" >}}
{{< guideline-card title="2023 ESC ACS Guideline" href="/pdfs/example.pdf" doc="esc-acs-2023" seed="/pdf-guidelines/esc-acs-2023.json" meta="ESC · 2023" tag="ACS" >}}
胸痛、ST-T 變化與侵入策略重點快速查詢。
{{< /guideline-card >}}

{{< guideline-card title="AHA STEMI Statement" href="/pdfs/example-2.pdf" doc="aha-stemi-2025" seed="/pdf-guidelines/aha-stemi-2025.json" meta="AHA · 2025" tag="STEMI" tone="sky" >}}
把診斷門檻、再灌流決策與常見陷阱收成第二張卡片。
{{< /guideline-card >}}
{{< /guideline-shelf >}}
EOF
}

if [[ -z "$selected_text" ]]; then
	selected_text="$(get_typora_selected_text)"
fi

trimmed_text="$(printf '%s' "$selected_text" | tr '\r\n' '  ' | awk '{$1=$1; print}')"

selected_text_b64="$(
	printf '%s' "$selected_text" | /usr/bin/base64 | tr -d '\n'
)"

choice_file="$(mktemp)"
trap 'rm -f "$choice_file"' EXIT

SELECTED_TEXT_B64="$selected_text_b64" \
CHOICE_FILE="$choice_file" \
AUTO_SELECT_ID="${AUTO_SELECT_ID:-}" \
AUTO_APPLY="${AUTO_APPLY:-}" \
/usr/bin/osascript -l JavaScript "/Users/tsaojian-hsiung/Desktop/CodexProjects/exampleSite/scripts/typora_preview_panel.jxa" >/dev/null

choice_id="$(cat "$choice_file" 2>/dev/null || true)"
escaped_text="${trimmed_text//\\/\\\\}"
escaped_text="${escaped_text//\"/\\\"}"

case "$choice_id" in
	"tag-mint")
		if [[ -n "$trimmed_text" ]]; then
			result="{{< tag-pill \"$escaped_text\" \"mint\" >}}"
		else
			result="$selected_text"
		fi
		;;
	"tag-sky")
		if [[ -n "$trimmed_text" ]]; then
			result="{{< tag-pill \"$escaped_text\" \"sky\" >}}"
		else
			result="$selected_text"
		fi
		;;
	"tag-amber")
		if [[ -n "$trimmed_text" ]]; then
			result="{{< tag-pill \"$escaped_text\" \"amber\" >}}"
		else
			result="$selected_text"
		fi
		;;
	"wave-h2")
		if [[ -n "$trimmed_text" ]]; then
			result="{{< ecg-wave-text level=\"2\" >}}$trimmed_text{{< /ecg-wave-text >}}"
		else
			result="$selected_text"
		fi
		;;
	"wave-h3")
		if [[ -n "$trimmed_text" ]]; then
			result="{{< ecg-wave-text level=\"3\" >}}$trimmed_text{{< /ecg-wave-text >}}"
		else
			result="$selected_text"
		fi
		;;
	"notice-flame")
		result="$(build_flame_notice_template)"
		;;
	"image-row-2")
		result="$(build_image_layout_template 2)"
		;;
	"image-row-3")
		result="$(build_image_layout_template 3)"
		;;
	"image-row-4")
		result="$(build_image_layout_template 4)"
		;;
	"image-grid-2-2")
		result="$(build_image_layout_template 2-2)"
		;;
	"image-grid-3-2")
		result="$(build_image_layout_template 3-2)"
		;;
	"pdf-footnote-template")
		result="$(build_pdf_footnote_template)"
		;;
	"guideline-shelf-template")
		result="$(build_guideline_shelf_template)"
		;;
	*)
		result="$selected_text"
		;;
esac

printf '%s' "$result"

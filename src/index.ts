import {EditorView} from "@codemirror/view"
import {Extension} from "@codemirror/state"

const myThemeExtension = EditorView.baseTheme({
  "&light .cm-line": {backgroundColor: "grey"},
})

export default function createExtension(): Extension {
  return myThemeExtension;
}

import { basicSetup, EditorState } from '@codemirror/basic-setup';
import { css } from '@codemirror/lang-css';
import { EditorView } from '@codemirror/view';
import createExtension from "../src/"

const doc = `
hello!
`

new EditorView({
  state: EditorState.create({
    doc,
    extensions: [basicSetup, createExtension()],
  }),
  parent: document.querySelector('#editor'),
});

/*
Top-level react component for editing HTML documents
*/

import { createEditor } from "../frame-tree/editor";
import { set } from "smc-util/misc2";
import { QuickHTMLPreview } from "./rendered-html";
import { IFrameHTML } from "./iframe-html";
import { CodemirrorEditor } from "../code-editor/codemirror-editor";
import { SETTINGS_SPEC } from "../settings/editor";
import { terminal } from "../terminal-editor/editor";

const EDITOR_SPEC = {
  cm: {
    short: "Code",
    name: "Source Code",
    icon: "code",
    component: CodemirrorEditor,
    buttons: set([
      "print",
      "decrease_font_size",
      "increase_font_size",
      "save",
      "time_travel",
      "replace",
      "find",
      "goto_line",
      "cut",
      "paste",
      "copy",
      "undo",
      "redo"
      /* "format" -- disabled -- see https://github.com/sagemathinc/cocalc/issues/3867 */
    ])
  },

  iframe: {
    short: "HTML",
    name: "HTML IFrame",
    icon: "compass",
    component: IFrameHTML,
    buttons: set([
      "print",
      "save",
      "time_travel",
      "reload",
      "decrease_font_size",
      "increase_font_size"
    ])
  },

  preview: {
    short: "Preview",
    name: "Quick Preview",
    icon: "html5",
    component: QuickHTMLPreview,
    buttons: set([
      "print",
      "decrease_font_size",
      "increase_font_size",
      "save",
      "time_travel",
      "reload"
    ])
  },

  terminal,

  settings: SETTINGS_SPEC
};

export const Editor = createEditor({
  format_bar: true,
  editor_spec: EDITOR_SPEC,
  display_name: "HTMLEditor"
});

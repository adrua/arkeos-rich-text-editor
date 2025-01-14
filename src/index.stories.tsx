/* @jsx h */
import { h } from "@stencil/core";
import { ArkeosRtfEditor } from "src";
import "../src/index.tsx";
import "../src/toolbar.tsx";

export default {
  parameters: {
    layout: "centered",
  },
};

var content: HTMLDivElement;
var editor;
var toolbar;
export const story1 = () => (<div style={ { width: "100%", height: "100%" }}>
    <arkeos-rtf-toolbar
      onChoose={ (e) => editor.execCommand(e) }></arkeos-rtf-toolbar>
    <arkeos-rtf-editor  
      ref={ (el: HTMLDivElement) => editor = el }
      onEdited={ async (_) => content.innerText = await editor.getSource() }>

    </arkeos-rtf-editor>
    <div ref={(el) => content = el  }></div>
</div>);

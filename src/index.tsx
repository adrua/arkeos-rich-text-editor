/* @jsx h */
import { h, Component, EventEmitter, Event, Host, Method } from "@stencil/core";
declare var EditContext;

@Component({
  tag: "arkeos-rtf-editor",
  styleUrl: "./index.scss",
  shadow: true,
})
export class ArkeosRtfEditor {
  editor!: HTMLDivElement;

  @Event()
  edited: EventEmitter;

  @Method()
  async getSource() {
    return this.editor.innerHTML;
  }

  render() {
    return (
      <Host>
        <div ref={ (el) => this.editor = el }
            contenteditable="true"
            onInput={ (e) =>  this.edited.emit(e) }>
        </div>
      </Host>
    );
  }
}

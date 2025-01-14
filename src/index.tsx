/* @jsx h */
import { h, Component, EventEmitter, Event, Host, Method } from "@stencil/core";

@Component({
  tag: "arkeos-rtf-editor",
  styleUrl: "./index.scss",
  shadow: true,
})
export class ArkeosRtfEditor {
  editor!: HTMLDivElement;

  @Event()
  edited: EventEmitter;

  @Event()
  config: EventEmitter;

  @Method()
  async getSource() {
    return this.editor.innerHTML;
  }

  @Method()
  async execCommnad(e: Event) {
    console.log(e);
    switch((e.target as any).innerText.toLowerCase()) {
      case 'bold':
        this.execCommand("strong", (element: HTMLElement, selectedTextRange: Range) => 
          selectedTextRange.surroundContents(element)
        )
        break;
      default:
        console.log(`Command: ${(e.target as any).innerText} not implemented`)
        break;
    }
    return this.editor.innerHTML;
  }

  execCommand(tag: string, exec: (element: HTMLElement, selectedTextRange: Range) => any) {
    const element = document.createElement(tag);
    const userSelection = window.getSelection();
    return exec(element, userSelection.getRangeAt(0));
  }

  componentDidLoad() {
    this.config.emit({ target: this });
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

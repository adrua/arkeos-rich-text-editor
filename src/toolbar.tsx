/* @jsx h */
import { h, Component, EventEmitter, Event, Host, Method } from "@stencil/core";
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js'

@Component({
  tag: "arkeos-rtf-toolbar",
  styleUrl: "./toolbar.scss",
  shadow: true,
})
export class ArkeosRtfToolbar {
  _editor: ArkeosRtfEditor;

  @Event() 
  choose: EventEmitter;

  render() {
    return (
      <Host>
        <div class="row">
          <div class="column">
              <md-icon-button
                aria-label="bold"
                onClick={ (e) => this.choose.emit(e) }>
                <md-icon>bold</md-icon>
              </md-icon-button>
          </div>
          <div class="column">
              <md-icon-button
                aria-label="italic"
                onClick={ (e) => this.choose.emit(e) }>
                <md-icon>italic</md-icon>
              </md-icon-button>
          </div>
        </div>
      </Host>
    );
  }
}

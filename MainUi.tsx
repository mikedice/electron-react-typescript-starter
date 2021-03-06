import * as React from "react";
import * as ReactDOM from "react-dom";

// hacky
// cannot import ipcRenderer from electron the right way
// because web-packing this code would throw an error when
// the JS is run inside the renderer.
//import {ipcRenderer} from "electron";
declare global {
  interface Window {
    require: any;
  }
}
const electron = window.require('electron');
// hacky


import Hello from "./Hello";

class UIEntry{
  static StartUI(){
    
    electron.ipcRenderer.send("ui-notifications", {
      name: "started-ui",
      value: "hello!"
    });

    ReactDOM.render(
      <Hello name="Willson" />,
      document.getElementById("root")
    );
  }
}

UIEntry.StartUI();

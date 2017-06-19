import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";

class UIEntry{
  static StartUI(){
    ReactDOM.render(
      <Hello name="Willson" />,
      document.getElementById("root")
    );
  }
}

UIEntry.StartUI();

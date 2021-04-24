import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { RouterSwitch } from "./src/components/RouteSwitch";

import "./Global.css";

ReactDOM.render(
  <React.StrictMode>
    <RouterSwitch />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import Store from "./stores/providers/store.provider";
import * as serviceWorker from "./serviceWorker";
// import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Store>
      <Route component={App} />
    </Store>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import '../node_modules/primeflex/primeflex.css'

import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
      <App />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

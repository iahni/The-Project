import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";



createBrowserRouter.render(
<BrowserRouter>
  <App/>

</BrowserRouter>,
document.getElementById('root'));



import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />
      <App />
    </Provider>
  </BrowserRouter>
);

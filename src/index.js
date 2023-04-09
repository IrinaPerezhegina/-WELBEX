import React from "react";
import ReactDOM from "react-dom/client";
import "./App/scss/libs/wrapper.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);

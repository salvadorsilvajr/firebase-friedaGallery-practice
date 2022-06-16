import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
// import "./index.scss";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextGlobal } from "./context/ContextTheme";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextGlobal>
                <App />
            </ContextGlobal>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

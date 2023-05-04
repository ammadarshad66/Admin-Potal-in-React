import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/reset.css";
import "./assets/fonts/index.css";
import "./styles/general.css";
import "./index.css";
import { ConfigProvider } from "antd";
import { variables } from "./styles/variables";
import Context from "./Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: variables.primary,
        },
      }}
    >
      <Context>
        <App />
      </Context>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

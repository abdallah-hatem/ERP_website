import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import "./Services/i18n.jsx";
import { FormThemeProvider } from 'react-form-component'


const root = ReactDOM.createRoot(document.getElementById("root"));
i18next.init({
  interpolation: { escapeValue: false },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormThemeProvider>
        <App />
      </FormThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

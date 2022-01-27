import React from "react";
import ReactDOM from "react-dom";
import "./static/css/index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import './static/css/statbox.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

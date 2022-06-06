import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ContentPage from "./pages/ContentPage";
import UserPage from "./pages/UserPage";
import ManagerPage from "./pages/ManagerPage";
import RegisterPage from "./pages/RegisterPage";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/mainpage" element={<MainPage />} />
        <Route exact path="/mainpage/:name" element={<MainPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/content" element={<ContentPage />} />
        <Route exact path="/content/:article" element={<ContentPage />} />
        <Route exact path="/userpage" element={<UserPage />} />
        <Route exact path="/managerpage" element={<ManagerPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

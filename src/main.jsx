import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainContent />    
    <Footer />
  </React.StrictMode>
);


import React from "react"
import "./scss/style.scss";
import Footer from "./components/Footer";
import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function App() {
  return (
    <>
      <div className="background-color"></div>
      <HashRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
          </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

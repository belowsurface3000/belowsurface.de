import React from "react"
import "./scss/style.scss";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Navigation from "./Components/Navigation";
// import References from "./Components/References";
// import Services from "./Components/Services";
// import Skills from "./Components/Skills";
import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum";
import Datenschutz from "./Components/Datenschutz";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
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

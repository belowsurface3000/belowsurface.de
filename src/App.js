import React from "react"
import "./scss/style.scss";
import Footer from "./components/Footer";
import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Tutorials from "./components/Tutorials";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <>
      <div className="background-color"></div>
      <HashRouter>
        <Header />
        <Navigation />
        <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="main" element={<Main />} />
              <Route path="tutorials" element={<Tutorials />} />
              <Route path="tutorials/tutorial" element={<Tutorial />} />
              <Route path="impressum" element={<Impressum />} />
              <Route path="datenschutz" element={<Datenschutz />} />
            </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

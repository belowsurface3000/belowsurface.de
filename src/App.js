import React from "react"
import "./scss/style.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import References from "./Components/References";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Navigation />
        <main>
          <About />
          <Services />
          <Skills />
          <References />
          <Contact />
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

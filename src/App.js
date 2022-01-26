import "./scss/style.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OutOfPageFlow from "./Components/OutOfPageFlow";
import References from "./Components/References";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <OutOfPageFlow />
      <Header />
      <main>
        <About />
        <Services />
        <Skills />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

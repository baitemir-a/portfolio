import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import CV from "./pages/cv/CV";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import MiniTitle from "./components/mini-title/MiniTitle";
import Footer from "./components/footer/Footer";
import Anchor from "./components/anchor/Anchor";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <MiniTitle>contacts</MiniTitle>
      <Footer />
      <Anchor/>
    </div>
  );
}

export default App;

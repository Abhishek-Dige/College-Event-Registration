import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import Dance from "./Pages/dance";
import Music from "./pages/music";
import Drama from "./Pages/drama";
import FineArts from "./Pages/fine_arts";
import Debate from "./Pages/debate";
import Coding from "./Pages/coding";
import Footer from "./components/Footer";
import ContactUs from "./Pages/contactus";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/music" element={<Music />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/fine-arts" element={<FineArts />} />
          <Route path="/debate" element={<Debate />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/contact-us" element={<ContactUs /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

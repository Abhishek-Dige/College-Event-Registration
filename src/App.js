import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/home";
import Dance from "./Pages/dance";
import Music from "./Pages/music";
import Drama from "./Pages/drama";
import FineArts from "./Pages/fine_arts";
import Debate from "./Pages/debate";
import Coding from "./Pages/coding";

function App() {
  return (
    <BrowserRouter>
    <h1> Hello</h1>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/music" element={<Music />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/fine-arts" element={<FineArts />} />
          <Route path="/debate" element={<Debate />} />
          <Route path="/coding" element={<Coding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

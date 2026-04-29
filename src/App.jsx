import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Dance from "./pages/dance";
import Music from "./pages/music";
import Drama from "./pages/drama";
import FineArts from "./pages/fine_arts";
import Debate from "./pages/debate";
import Coding from "./pages/coding";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
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
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;

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
import ContactUs from "./pages/contactus";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppContent() {
  const { user } = useAuth();
  
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        {user ? (
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
        ) : (
          <div className="container mt-5 pt-5 text-center">
            <h2 className="mb-4">Welcome to Event Registration</h2>
            <p className="lead mb-4">Please login or register to access the dashboard.</p>
            <button className="btn btn-success me-2 btn-lg" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

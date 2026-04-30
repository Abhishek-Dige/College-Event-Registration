import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Dance from "./Pages/dance";
import Music from "./Pages/music";
import Drama from "./Pages/drama";
import FineArts from "./Pages/fine_arts";
import Debate from "./Pages/debate";
import Coding from "./Pages/coding";
import Footer from "./Components/Footer";
import ContactUs from "./Pages/contactus";
import EventDetails from "./EventDetails";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

function AppContent() {
  const { token } = useAuth();

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        {token ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dance" element={<Dance />} />
            <Route path="/music" element={<Music />} />
            <Route path="/drama" element={<Drama />} />
            <Route path="/fine-arts" element={<FineArts />} />
            <Route path="/debate" element={<Debate />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/event/:id" element={<EventDetails />} />
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
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

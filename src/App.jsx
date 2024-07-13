import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./features/about/About";
import LandingPage from "./features/home/Landing";
import Program from "./features/program/Program";
import Blog from "./features/blog/Blog";
import Contact from "./features/contact/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import BlogDetails from "./features/blogdetails/BlogDetails";

function App() {
  return (
    <Router>
      <AppBar />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

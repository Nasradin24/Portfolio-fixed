import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import Header from "./components/Header";
import Navbar from "./pages/Navbar";
import Experience from "./pages/Experience";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);

  console.log(value);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

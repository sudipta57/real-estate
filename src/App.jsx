import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import BlogScreen from "./pages/BlogScreen";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import RegisterScreen from "./pages/Signup";

import "@fontsource/abhaya-libre"; // Default font weights

import "./App.css";
import Property from "./pages/Property";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog-screen" element={<BlogScreen />} />
        <Route path="/property-screen" element={<Property />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sign-up" element={<RegisterScreen />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

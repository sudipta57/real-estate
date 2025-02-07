import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
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
import Property from "./pages/Property";

import "@fontsource/abhaya-libre"; // Default font weights

function App() {
  const location = useLocation();

  // List of routes where Navbar and Footer should be hidden
  const hideNavAndFooter = ["/sign-up", "/sign-in", "/forgot-password"];
  const shouldHide = hideNavAndFooter.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHide && <Navbar />}
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
      {/* Conditionally render Footer */}
      {!shouldHide && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

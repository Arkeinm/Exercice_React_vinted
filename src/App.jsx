import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
library.add(faMagnifyingGlass);

const App = () => {
  const cookie = Cookies.get("token");
  const [cookieToken, setCookieToken] = useState(cookie || null);
  return (
    <Router>
      <Header cookieToken={cookieToken} setCookieToken={setCookieToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<SignUp setCookieToken={setCookieToken} />}
        />
        <Route
          path="/login"
          element={<Login setCookieToken={setCookieToken} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

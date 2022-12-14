import React from "react";
import Home from "./views/home";
import Inventory from "./views/inventory";
import Profile from "./views/profile";
import CarSingle from "./views/CarSingle";
import firebase from "./firebase";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inventory" element={<Inventory />}>
            <Route path=":id" element={<CarSingle />} />
            <Route path="" element={<Inventory />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

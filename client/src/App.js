import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

// UTILS
import ScrollToTop from "./utils/ScrollToTop";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Human from "./components/Human/Human";
import ModifyHuman from "./components/ModifyHuman/ModifyHuman";
import Food from "./components/Food/Food";
import Veterinary from "./components/Veterinary/Veterinary";
import VisitorsBook from "./components/VisitorsBook/VisitorsBook";

import Footer from "./components/Footer/Footer";

// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <div className="app__container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/mon-maitre" element={<Human />}>
              {" "}
            </Route>
            <Route path="/changer-mon-adresse" element={<ModifyHuman />}>
              {" "}
            </Route>
            <Route path="/mon-livre-dor" element={<VisitorsBook />}></Route>
            <Route path="/mon-alimentation" element={<Food />}></Route>
            <Route path="/mon-veto" element={<Veterinary />}></Route>
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

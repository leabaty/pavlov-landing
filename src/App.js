import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

// UTILS
import ScrollToTop from "./utils/ScrollToTop";

// DATA
import addresses from "./data/addresses.json";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Human from "./components/Human/Human";
import ModifyHuman from "./components/ModifyHuman/ModifyHuman";
import Food from "./components/Food/Food";
import Veterinary from "./components/Veterinary/Veterinary";

import Footer from "./components/Footer/Footer";

// import NotFound from "./components/NotFound/NotFound";

function App() {
  
  const [addressDetails, setAddressDetails] = useState([]);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <div className="app__container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route
              path="/mon-maitre"
              element={
                <Human
                  addressDetails={addressDetails}
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/changer-mon-adresse"
              element={
                <ModifyHuman
                  addresses={addresses.addresses}
                  setAddressDetails={setAddressDetails}
                />
              }
            >
              {" "}
            </Route>
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

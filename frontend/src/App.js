import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

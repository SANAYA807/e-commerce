import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';



function App() {
  return (
    <Router>
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" exact element={<ProductDetail />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>




      <Footer />

    </Router>
  );
}

export default App;

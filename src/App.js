import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Check from "./components/checkoutpage/Check";


import "./styles/header.scss";
import "./styles/last.scss";

import "./styles/product.css";
import "./styles/About.scss";
import ProductList from "./components/product/ProductList";

import Footer from "./components/footer/Footer";

import Login from "./components/login/fakelogin";
import Signup from "./components/login/fakesingup";
import AboutUs from "./components/About/About";
import Header from "./components/header/Dummyheader";
import Shoppingcart from "./components/product/Shoppingcart";
import PublicRoute from "./components/Routes/PublicRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";




function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Header/>
            <Home/>
          </ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <PublicRoute> <Header/><Check /></PublicRoute>
            
            
          
        } />
        <Route path="/about" element={
         <PublicRoute> <Header/><AboutUs /></PublicRoute>
            
         
        } />
        <Route path="/products" element={
           <PublicRoute> <Header/><ProductList /></PublicRoute>
            
          
        } />
        
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Signup/>
          </PublicRoute>
        } />
        <Route path="/cart" element={
           <PublicRoute> <Header/> <Shoppingcart /></PublicRoute>
         
        } />
        
        
       
        
        
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;



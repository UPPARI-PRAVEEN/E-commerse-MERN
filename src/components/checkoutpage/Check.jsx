import React, { useState } from 'react';
import '../../styles/checkout.css';
import {IoBagCheckOutline } from "react-icons/io5";

import cartIcon from '../../assets/icon2.png';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Process form data and complete order
    alert('Thank you for your order!');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Credit Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <button type="submit">Complete Order</button>
      </form>
    </div>
  );
};

export default Checkout;
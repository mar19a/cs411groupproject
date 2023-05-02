import React, { useState } from 'react';

const AdditionalInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phoneNumber });
  };

  return (
    <div className="additional-info-form">
      <h4>Please provide the following information</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="phoneNumber">Phone Number*</label>
        <input
          type="tel"
          name="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          required
        />

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AdditionalInfoForm;
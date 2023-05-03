import React, { useState } from "react";

const AdditionalInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter Additional Information</h4>
      <label htmlFor="name">Name*</label>
      <input
        className="textInput"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
        required
      />
      <label htmlFor="username">Username*</label>
      <input
        className="textInput"
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your Username"
        required
      />
      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

export default AdditionalInfoForm;
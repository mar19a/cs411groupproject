import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RestaurantImage from "../../pictures/Restaurant.jpg";
import { useNavigate } from "react-router-dom";
import "./CtaSection.css";

const CtaSection = ({ fetchBusinesses }) => {
  const [query, setQuery] = useState("");
  
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("Please enter a city");
    } else {
      fetchBusinesses(query);
      navigate("/businesses")
      setQuery("");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };


  return (
    <div className="ctaSection">
      <div className="Section">
        <div className="verbiage">
          <h2> Search Local Businesses Nearby! </h2>
          <p>
          Let us help you find not just the perfect home, but also the perfect location.
          We'll make it easy by providing you with a list of local businesses you're sure to love.
          </p>
          <form className="search" onSubmit={onSubmit}>
            <input 
            value={query}
            onChange={onChange}
            type="text"
            placeholder="For example: Restaurants in San Diego..."
            />
            <button 
            type="submit">
            <AiOutlineSearch className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
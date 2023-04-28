import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MapOfHouses from "../../pictures/MapOfHouses.jpg";
import Restaurant from "../../pictures/Restaurant.jpg"


import "./Hero.css";

const Hero = ({ fetchListings, listings, fetchBusinesses }) => {
  //Real Estate Query
  const [queryRealty, setQueryRealty] = useState("");

  const navigate = useNavigate();

  const onSubmitRealty = (e) => {
    e.preventDefault();
    if (queryRealty === "") {
      alert("Please enter a city, address, or ZIP");
    } else {
      fetchListings(queryRealty);
      navigate("/listing");
      setQueryRealty("");
    }
  };

  const onChangeRealty = (e) => {
    setQueryRealty(e.target.value);
  };

  //Business Query
  const [queryBusiness, setQueryBusiness] = useState("");


  const onSubmitBusiness = (e) => {
    e.preventDefault();
    if (queryBusiness === "") {
      alert("Please enter a city");
    } else {
      fetchBusinesses(queryBusiness);
      navigate("/businesses")
      setQueryBusiness("");
    }
  };

  const onChangeBusiness = (e) => {
    setQueryBusiness(e.target.value);
  };

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;
    if (newIndex >= 1 && newIndex <= 2) {
      setSlideIndex(newIndex);
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("content");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <div className="hero">
      <div className="content fade">
      <img src={MapOfHouses} style={{width: '100%', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.656), rgba(0, 0, 0, 0.180))'}}/>
        <div className="textcontent">
        <h1> Find homes first.</h1>
        <h1> Tour homes fast.</h1>
        <form className="search" onSubmit={onSubmitRealty}>
          <input
            value={queryRealty}
            onChange={onChangeRealty}
            type="text"
            placeholder="Enter a city, address..."
            style={{ color: "white", fontWeight: "100" }}
          />
        </form>
        </div>
      </div>
    
      <div className="content fade">
      <img src={Restaurant} style={{width: '100%', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.656), rgba(0, 0, 0, 0.180))'}}/>
        <div className="textcontent" style={{left: '80%', top: '90%'}}>
        <h1> Search Nearby Businesses.</h1>
        <form className="search" onSubmit={onSubmitBusiness}>
          <input
            value={queryBusiness}
            onChange={onChangeBusiness}
            type="text"
            placeholder="Hotels in San Diego..."
            style={{ color: "white", fontWeight: "100" }}
          />
        </form>
        </div>
      </div>
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
      </div>
    </div>
  );
};

export default Hero;

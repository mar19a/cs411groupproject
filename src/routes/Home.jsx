import React from "react";
import Hero from "../components/hero/Hero";
import CtaSection from "../components/ctaSection/CtaSection";

const Home = ({ fetchListings, listings, fetchBusinesses }) => {
  return (
    <div>
      <Hero
        fetchListings={fetchListings}
        listings={listings}
        fetchBusinesses={fetchBusinesses}
      />
    </div>
  );
};

export default Home;

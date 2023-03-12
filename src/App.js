import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./routes/Home";
import Navbar from "./components/navbar/NavBar";
import Listings from "./routes/Listings";
import Footer from "./components/footer/Footer";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState(2);

  const length = listings.length;
  console.log(length + " this is the length");

  const host = "zillow-com1.p.rapidapi.com";
  const key = "468155d14cmshdb119f697ad0e99p151e0ejsn21dc85e6c284"

  const fetchListings = (query) => {
    setLoading(true);
    var options = {
      method: "GET",
      url: `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${query}&home_type=Houses`,
      headers: {
        'X-RapidAPI-Key': '468155d14cmshdb119f697ad0e99p151e0ejsn21dc85e6c284',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
      },
    };

    axios
      .request(options)
      .then((response) => {
        let props = response.data.props;

        props = props.sort((a, b) => {
          if (sortOrder === 1) {
            return a.price > b.price ? 1 : -1;
          } else {
            return a.price < b.price ? 1 : -1;
          }
        });
        setListings(props);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          fetchListings={fetchListings}
          listings={listings}
          loading={loading}
        />
      ),
    },
    {
      path: "/listings",
      element: (
        <Listings
          fetchListings={fetchListings}
          listings={listings}
          loading={loading}
        />
      ),
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import Home from "./routes/Home";
import Navbar from "./components/navbar/NavBar";
import Listings from "./routes/Listings";
import Footer from "./components/footer/Footer";
import Businesses from "./routes/Businesses.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Switch } from 'react-router';
import ContactPage from "./components/ContactPage";
import NewsPage from "./components/NewsPage/NewsPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { AuthProvider } from "./components/LoginForm/AuthContext"; 
function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState(2);
  const [businesses, setBusinesses] = useState([])

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
        console.log(response.data)
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

  const fetchBusinesses = (query) => {
    var options = {
      method: 'GET',
      url: 'https://local-business-data.p.rapidapi.com/search',
      params: {
        query: query,
        limit: '3',
        language: 'en',
        region: 'us'
      },
     headers: {
      'X-RapidAPI-Key': 'c4f3e07beemshb1acc916f9b9c8bp18ed02jsnbc8e23bf33b8',
      'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
      }
    };

  axios.request(options).then(function (response) {
    let data = response.data.data;
    setBusinesses(data)
  }).catch(function (error) {
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
          fetchBusinesses={fetchBusinesses}
        />
      ),
    },
    {
      path: "/listing",
      element: (
        <Listings
          fetchListings={fetchListings}
          listings={listings}
          loading={loading}
        />
      ),
    },
    {
      path: "/businesses",
      element: (
        <Businesses
        fetchBusinesses={fetchBusinesses}
        businesses={businesses}
        />
      )
    },
    {
      path: "/Contact",
      element: (
        <ContactPage
          
        />
      ),
    },

    {
      path: "/News",
      element: (
        <>
        <NewsPage />
      </>
      ),
    },
    {
      path: "/signup",
      element: (
        <SignUpForm />
      ),
    },
    {
      path: "/login",
      element: (
        <LoginForm />
      ),
    },
    
  ]);

  return (
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </AuthProvider>
  );
}

export default App;
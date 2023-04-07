import React from 'react';
import './BusinessCard.css'


const BusinessCard = ({ businesses }) => {
    let website = businesses.website
    return(
        <a href={website} target="_blank" rel="noopener noreferrer">
        <div className="businessCard">
        <div className="businessText">
          <h3>{businesses.name}</h3>
          <div className="businessSummary">
          {businesses.about.summary}
          </div>
          <div>
            {businesses.address} | {businesses.phone_number} 
          </div>
          <div className="businessWebsite">
          <a href={website}>{website}</a>
          </div>
        </div>
      </div>
      </a>

    )
} 

export default BusinessCard
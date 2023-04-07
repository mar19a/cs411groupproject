import React from 'react'
import BusinessCard from "../businessCard/BusinessCard"

const BusinessesList = ({ businesses }) => {
  console.log(businesses)
  return (
    <div>
      <h1>Results:</h1>
      {businesses.map((businesses) => (
        <BusinessCard businesses={businesses}/>
      ))}
    </div>
  )
}

export default BusinessesList;
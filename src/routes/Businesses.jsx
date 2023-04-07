import React from 'react';
import BusinessesList from "../components/businessesList/BusinessesList"

const Businesses = ({ businesses }) => {
  return (
    <BusinessesList businesses={businesses}/>
  )
}

export default Businesses
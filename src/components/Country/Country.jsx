import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
  const {name,flags,population,area,cca3} = country;
  const [visited, setVisited] = useState(false)
  const handleVisited = () => {
    setVisited(!visited)
  }
  console.log(handleVisitedCountry)
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color: visited? 'purple':'slate'}}>{name.official} </h3>
      <img src={flags.png} alt="" />
      <p>Common Name: {name.common}</p>
      <p>Population: {population} </p>
      <p>Area: {area} </p>
      <p>Code: {cca3}</p>
      <button>Mak Visited</button><br />
      <button onClick={handleVisited}>{visited?'Visited': 'Going'}</button>
      {visited ? 'I have visited the country' : 'I want to visit'}
    </div>
  );
};

export default Country;
import React, { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
  console.log(country)
  const {name,flags,population,area,cca3} = country;
  const [visited, setVisited] = useState(false)
  const handleVisited = () => {
    setVisited(true)
  }
  return (
    <div className='country'>
      <h3>{name.official} </h3>
      <img src={flags.png} alt="" />
      <p>Common Name: {name.common}</p>
      <p>Population: {population} </p>
      <p>Area: {area} </p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>Visited</button>
      {visited && 'I have visited the country'}
    </div>
  );
};

export default Country;
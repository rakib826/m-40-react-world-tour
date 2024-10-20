import React from 'react';
import './Country.css'
const Country = ({country}) => {
  console.log(country)
  const {name,flags,population,area} = country;
  return (
    <div className='country'>
      <h4>{name.official} </h4>
      <p>Common Name: {name.common}</p>
      <p>Population: {population} </p>
      <p>Area: {area} </p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
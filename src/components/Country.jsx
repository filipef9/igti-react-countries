import React from 'react';
import Info from './Info';

const Country = ({
  children: country = null,
  isVisited = false,
  onCountryClick = null,
}) => {
  if (!country) {
    return <div>Impossível redenrizar o país</div>;
  }

  const { id, name, capital, region, population, area, flag } = country;
  const demographicDensity = population / area;

  const handleCountryClick = _ => {
    if (onCountryClick) {
      onCountryClick(id);
    }
  };

  const isVisitedClassName = isVisited ? 'bg-green-100' : '';

  return (
    <div
      className={`border p-2 m-2 flex items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img src={flag} alt={name} className="w-48" />
      <ul>
        <li>
          <Info label="Nome:">{name}</Info>
        </li>
        <li>
          <Info label="Capital:">{capital}</Info>
        </li>
        <li>
          <Info label="Região:">{region}</Info>
        </li>
        <li>
          <Info label="População:">{population}</Info>
        </li>
        <li>
          <Info label="Área:">{area}</Info>
        </li>
        <li>
          <Info label="Densidade demográfica:">{demographicDensity}</Info>
        </li>
      </ul>
    </div>
  );
};

export default Country;

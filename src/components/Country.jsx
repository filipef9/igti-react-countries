import React from 'react';

const Country = ({ children: country = null }) => {
  if (!country) {
    return <div>Impossível redenrizar o país</div>;
  }

  return <div>{country.name}</div>;
};

export default Country;

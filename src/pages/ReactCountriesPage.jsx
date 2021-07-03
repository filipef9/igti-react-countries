import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

import { countries } from '../data/countries.js';

const MIN_CHARACTERS = 3;

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState('Brazil');
  const handleChangeCountryFilter = newCountry => {
    setCountryFilter(newCountry);
  };

  const filteredCountries =
    countryFilter.length >= MIN_CHARACTERS
      ? countries.filter(({ nameInLowercase }) =>
          nameInLowercase.includes(countryFilter.toLocaleLowerCase())
        )
      : countries;
  console.log(filteredCountries);

  return (
    <>
      <Header>igti-react-countries</Header>
      <Main>
        <TextInput
          id="countryFilter"
          label="Informe o nome do país (mínimo 3 caracteres):"
          value={countryFilter}
          handleOnChange={handleChangeCountryFilter}
        />
      </Main>
    </>
  );
};

export default ReactCountriesPage;

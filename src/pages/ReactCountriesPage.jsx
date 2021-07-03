import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import Countries from '../components/Countries';

import { countries } from '../data/countries.js';

const MIN_CHARACTERS = 3;

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState('');
  const handleChangeCountryFilter = newCountry => {
    setCountryFilter(newCountry);
  };

  const filteredCountries =
    countryFilter.trim().length >= MIN_CHARACTERS
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

        <Countries>{filteredCountries}</Countries>
      </Main>
    </>
  );
};

export default ReactCountriesPage;

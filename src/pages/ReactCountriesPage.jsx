import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import Countries from '../components/Countries';

import { countries } from '../data/countries.js';
import Country from '../components/Country';

const MIN_CHARACTERS = 3;

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState('');
  const handleChangeCountryFilter = newCountry => {
    setCountryFilter(newCountry);
  };

  const [visitedCountries, setVisitedCountries] = useState([]);
  const toggleVisitedCountry = countryId => {
    let copyVisitedCountries = [...visitedCountries];

    const countryHasAlreadyBeenVisited =
      copyVisitedCountries.indexOf(countryId) !== -1;
    if (countryHasAlreadyBeenVisited) {
      copyVisitedCountries = copyVisitedCountries.filter(
        visitedCountryId => visitedCountryId !== countryId
      );
    } else {
      copyVisitedCountries.push(countryId);
    }

    setVisitedCountries(copyVisitedCountries);
  };

  const filteredCountries =
    countryFilter.trim().length >= MIN_CHARACTERS
      ? countries.filter(({ nameInLowercase }) =>
          nameInLowercase.includes(countryFilter.toLocaleLowerCase())
        )
      : countries;

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

        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} país(es)
          </h2>
          <h3 className="text-center font-semibold text-sm">
            {visitedCountries.length} país(es) visitado(s)
          </h3>

          {filteredCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;

            return (
              <Country
                key={country.id}
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </>
  );
};

export default ReactCountriesPage;

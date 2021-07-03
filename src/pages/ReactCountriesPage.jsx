import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState('Brazil');
  const handleChangeCountryFilter = newCountry => {
    setCountryFilter(newCountry);
  };

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

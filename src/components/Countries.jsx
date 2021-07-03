import Country from './Country';

const Countries = ({ children: countries = [] }) => {
  return (
    <div className="border p-2">
      <h2 className="text-center font-semibold">{countries.length} país(es)</h2>
      {countries.map(country => (
        <Country key={country.id}>{country}</Country>
      ))}
    </div>
  );
};

export default Countries;

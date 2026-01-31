import { useState, useEffect } from 'react';
import './FlagComponent.css';
import countriesData from '../../../Constants/Countries.json';



const FlagComponent = () => {

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
    setFilteredCountries(countriesData);
  }, []);

const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(term)
    );
    setFilteredCountries(results);
  };

	return (
    <div className="app-container">
      <h1>Country Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

<div className="country-grid">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div key={country.name} className="country-card">
              <img src={country.flag} alt={`${country.name} flag`} />
              <div className={`country-text-${index === 4 ? "T" : ""}`}>
                <h2>{country.name}</h2>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No country found!</p>
        )}
      </div>
    </div>
  );
};

export default FlagComponent;
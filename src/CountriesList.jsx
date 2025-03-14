import React, { useEffect, useState } from "react";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(
          data.map((c) => ({
            name: c.name.common,
            abbr: c.cca2,
            flag: c.flags.svg,
          }))
        );
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError(err.message);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredCountries = debouncedSearch
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : countries;

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        {filteredCountries.map((country) => (
          <div
            key={country.abbr}
            style={{
              textAlign: "center",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              style={{ width: "100px", height: "auto" }}
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;

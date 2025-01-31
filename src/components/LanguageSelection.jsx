const languages = [
  "English",
  "Deutsch",
  "Français",
  "Español"
];

const getCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name');
  const data = await res.json();
  const countryNames = data.map(country => country.name.common);
  const sortedCountries = countryNames.slice(100, 150).sort();
  return sortedCountries;
};

const countries = await getCountries();

function LanguageSelection() {
  return (
    <div className="language_container">
      <p>Language and Location</p>
      <select className="select language">
        {
          languages.map((language, index) =>
            <option key={index}>
              {language}
            </option>
          )
        }
      </select>
      <select className="select country">
        {
          countries.map((country, index) =>
            <option key={index}>
              {country}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default LanguageSelection;
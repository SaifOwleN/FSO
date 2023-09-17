import axios from "axios";
import { useState, useEffect } from "react";

const Content = ({ country, setCountry }) => {
  if (country.length > 10 || country.length == 0) {
    return <p>Too many matches, specify another filter</p>;
  } else if (country.length > 1) {
    return (
      <div>
        {country.map((p, i) => (
          <div key={i}>
            {p.name.common}{" "}
            <button onClick={() => setCountry([p])}>Show</button>{" "}
          </div>
        ))}
      </div>
    );
  } else {
    const [Weather, setWeather] = useState([]);
    const URLW = `https://api.openweathermap.org/data/2.5/weather?q=${country[0].name.common}&appid=5069c386b14c5622a25d61159d4f9b89`;
    console.log("URLW", URLW);
    useEffect(() => {
      axios.get(URLW).then((Response) => setWeather(Response.data));
    }, []);

    return (
      <div>
        {country.map((country, i) => {
          let element = [];
          for (const lang in country.languages) {
            if (
              country.languages.hasOwnProperty.call(country.languages, lang)
            ) {
              element.push(country.languages[lang]);
            }
          }
          return (
            <div key={i}>
              <h1>{country.name.common}</h1>
              <p>
                Capital: {country.capital}
                <br />
                Area: {country.area}
              </p>
              <h2>languages:</h2>
              <ul>
                {element.map((e, i) => (
                  <li key={i}>
                    {e}
                    <br />
                  </li>
                ))}
              </ul>
              <img src={country.flags.png}></img>
              <h2>Weather in {country.capital}</h2>
              <div className='bg-blue-200'>
                {Weather.main ? (
                  <p>temperature: {Weather.main.temp - 273}° Celsius</p>
                ) : null}
                {Weather.weather ? (
                  <img
                    src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`}
                  ></img>
                ) : null}
                {Weather.wind ? <p> wind: {Weather.wind.speed} m/s</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Content;

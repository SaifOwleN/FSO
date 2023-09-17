import { useState, useEffect } from "react";
import Data from "./Services/Ahmed";
import Content from "./Components/Content";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    Data.getAll().then((R) => setCountries(R));
  }, []);

  const Filter = (e) => {
    setSearch(e.target.value);
    const filteredData = countries.filter((c) => {
      return c.name.common.toLowerCase().includes(search.toLowerCase());
    });
    setCountry(filteredData);
  };

  return (
    <div>
      <div>
        <div>
          <input value={search} onChange={Filter} />
        </div>
        <Content country={country} setCountry={setCountry} />
      </div>
    </div>
  );
}

export default App;

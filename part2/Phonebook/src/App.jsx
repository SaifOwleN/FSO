import { useState, useEffect } from "react";
import PersonForm from "./Components/PersonForm";
import Results from "./Components/Results";
import Filter from "./Components/Filter";
import Data from "./Services/AxiosOP";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");
  const [ErrorM, setErrorM] = useState('')

  const FilteredData = persons.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    Data.getAll().then((Resp) => setPersons(Resp));
  }, []);

  const AddName = (e) => {
    e.preventDefault();
    const NewPerson = {
      name: newName,
      number: newPhone,
    };
    if (persons.find((e) => e.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added would u like to change the number`
        )
      ) {
        const theperson = persons.filter((e) => e.name === newName);
        const changingperson =theperson[0];
        Data
        .change(changingperson.id,NewPerson)
        .then(e=>{
          setPersons(
            persons.map((personItem) =>
              personItem.id !== changingperson.id ? personItem : e)
          )
          setErrorM(`${newName} has been updated`)
          setTimeout(() => {
            setErrorM(null);
          }, 5000);
          
        }
        )
        .catch(error=>{
          setPersons(persons.filter(p=>p.id!==changingperson.id))
          setNewName('');
          setNewPhone('');
          setErrorM(`[ERROR] ${newName} is already deleted from the server`)
          setTimeout(() => {
            setErrorM(null);
          }, 5000);
        })
        
      }
    } else Data.postAll(NewPerson).then((x) => {
      setPersons(persons.concat(x))
      setErrorM(`${newName} has been added`)
      setTimeout(() => {
        setErrorM(null);
      }, 5000);
    });
    setNewName("");
    setNewPhone("");
  };
  const DeletePerson = (id) => {
    Data.DeleteELE(id);
    setPersons(persons.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {ErrorM}
      <Filter search={search} setSearch={setSearch} />
      <PersonForm
        AddName={AddName}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      />
      <Results FilteredData={FilteredData} DeletePerson={DeletePerson} />
    </div>
  );
};

export default App;

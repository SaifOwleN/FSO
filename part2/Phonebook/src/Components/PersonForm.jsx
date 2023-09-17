const PersonForm = ({
  AddName,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
}) => {
  return (
    <form onSubmit={AddName}>
      <div>
        Name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        Phone:{" "}
        <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};
export default PersonForm;

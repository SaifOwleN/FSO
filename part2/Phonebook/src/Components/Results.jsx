const Results = ({ FilteredData, DeletePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {FilteredData.map((p) => (
        <div key={Math.random()}>
          {p.name} {p.number}{" "}
          <button onClick={() => DeletePerson(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Results;

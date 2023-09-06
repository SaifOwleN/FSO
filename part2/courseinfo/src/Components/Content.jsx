import Parts from "./Parts";

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Parts key={part.id} part={part.name} exercises={part.exercises} />
    ))}
  </div>
);
export default Content;

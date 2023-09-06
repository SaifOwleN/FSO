import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ courses }) => {
  console.log("course", courses);
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header Head={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};
export default Course;

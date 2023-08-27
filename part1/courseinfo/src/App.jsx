const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
      <p>
        {props.ContentP1} {props.ContentE1}
      </p> 
      <p>
        {props.ContentP2} {props.ContentE2}
      </p>
      <p>
        {props.ContentP3} {props.ContentE3}
      </p>    
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part ContentP1= {props.parts[0].name} ContentE1= {props.parts[0].exercise} />
      <Part ContentP2= {props.parts[1].name} ContentE2={props.parts[1].exercise}/>
      <Part ContentP3={props.parts[2].name} ContentE3={props.parts[2].exercise}/>

    </div>
  )
}
const Total =(props) => {
  return(
    <div>
      
      <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise} </p>
    </div>
  )
}

const App = () => {
  const course = { name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }
  ]}

  return (
    <div>
      <Header course={course}/>

      <Content parts={course.parts}/>

      <Total parts={course.parts}/>
    </div>
  )
}

export default App
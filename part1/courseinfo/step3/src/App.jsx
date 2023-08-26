const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
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
      <Part ContentP1={props.part1} ContentE1={props.exercises1} />
      <Part ContentP2={props.part2} ContentE2={props.exercises2} />
      <Part ContentP3={props.part3} ContentE3={props.exercises3} />

    </div>
  )
}
const Total =(props) => {
  return(
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercise: 10

  }
  const part2 = {
    name: 'Using props to pass data',
    exercise: 7

  }
  const part3 = {
    name: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      <Header course={course}/>

      <Content part1={part1.name} exercises1={part1.exercise}/>
      
      <Content part2={part2.name} exercises2={part2.exercise}/>

      <Content part3={part3.name} exercises3={part3.exercise}/>

      <Total total={part1.exercise + part2.exercise + part3.exercise}/>
    </div>
  )
}

export default App
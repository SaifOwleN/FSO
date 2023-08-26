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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>

      <Content part1={part1} exercises1={exercises1}/>
      
      <Content part2={part2} exercises2={exercises2}/>

      <Content part3={part3} exercises3={exercises3}/>

      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
      name:'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    return (
      
      <h1>{props.course}</h1>
      
    )
  }

  const Content = (props) => {

    const Part = (props) => {
      return (
        <div>
          <p>{props.info.name}</p>
          <p>{props.info.exercises}</p>
        </div>
      )
    }

    return (
      <div>
        <Part info ={props.parts[0]}/>
        <Part info = {props.parts[1]}/>
        <Part info = {props.parts[2]}/>
      </div>
    )
  }

  const Total = (props) => {

    let totalnum = 0
    for (let i = 0; i < props.parts.length; ++i){
      totalnum += props.parts[i].exercises
    }
    
    return (
      <p>Number of exercises {totalnum}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App
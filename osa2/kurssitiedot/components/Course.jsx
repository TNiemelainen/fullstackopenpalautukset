const Header = ({course}) => {
    console.log(course)
    return (
      
      <h2>{course}</h2>
      
    )
  }
  const Part = ({info}) => {
    console.log(info)
    return (
        <p>{info.name} {info.exercises}</p>
    )
  }

  const Content = ({part}) => {
    console.log("content part:",part)
    return (
        <Part info={part}/>
    )
  }

const Course = ({courses}) => {

    console.log(courses)

    return(
        <div>
            {courses.map(onecourse => 
            <div key={onecourse.id}>
                <Header course = {onecourse.name}/>
                {onecourse.parts.map(content => <Part key={content.id} info={content}/>)}
                <p>total of {onecourse.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises,0)} exercises</p>
            </div>)}
        </div>
    )
}

export default Course
import { useState } from 'react'


const Button = ({name,stateValue,setState}) => {

  const newValue = stateValue

  return (
    <button onClick={() => setState(newValue +1)}>{name}</button>
  )
}

const StatisticLine = ({text, value}) => {

  if (text === "positive"){
    return (
        <tr>
          <td>{text}</td>
          <td>{value}%</td>
        </tr>
    )
  }
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

function calculateAverage(good,bad,neutral){

  
  const sum = good + bad + neutral

  if (sum === 0){
    return 0
  }
  const average = (good - bad)/sum
  return average
}

function calculatePositive(good,bad,neutral){
  const sum = good + bad  + neutral

  if (sum === 0 ){
    return 0
  }
  const positive = (good / sum) * 100
  return positive
}

const Statistics = ({good,bad,neutral}) => {
  let all = good + bad + neutral

  if (all === 0){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={calculateAverage(good,bad,neutral)}/>
          <StatisticLine text="positive" value={calculatePositive(good,bad,neutral)}/>
        </tbody>
      </table>

    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={"good"} stateValue={good} setState={setGood} />
      <Button name={"neutral"} stateValue={neutral} setState={setNeutral} />
      <Button name={"bad"} stateValue={bad} setState={setBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
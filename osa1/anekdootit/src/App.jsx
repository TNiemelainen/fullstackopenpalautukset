import { useState } from 'react'

// Function to help getting a new random number.
// Usestate does not want to have the same value as its next state
function getNewRandomNumber(numAnecdotes,selected){
  let randomNumber = Math.floor(Math.random(numAnecdotes)*numAnecdotes)

  if (randomNumber === selected){
    randomNumber = getNewRandomNumber(numAnecdotes,selected)
  }
  return randomNumber
}

function addVote(selected,votes){

  console.log(votes)
  const copyvotes = [...votes]

  copyvotes[selected] += 1
  return copyvotes
}

function mostVotes(votes){

  let max = votes[0]
  let maxindex = 0
  for (let i = 1; i < votes.length; ++i){
    if (votes[i] > max){
      max = votes[i]
      maxindex = i
    }
  }
  return [maxindex, max]
}

const Button = ({anecdotes,setSelected,selected}) => {

  let numAnecdotes = anecdotes.length-1
  console.log(numAnecdotes)
  const randomNumber = getNewRandomNumber(numAnecdotes,selected)
  console.log("Generated randomnumber",randomNumber)
  return (
    <button onClick={() =>setSelected(randomNumber)}>next anecdote</button>
  )
}

const VoteButton = ({selected, votes, setVotes}) => {

  const updatedVotes = addVote(selected,votes)  
  console.log("updated votes",updatedVotes)
  return (
    <button onClick={() => setVotes(updatedVotes)}>vote</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  let numofanecdotes = anecdotes.length -1
  console.log("number of anecdotes",numofanecdotes)

  const [maxIndex, max] = mostVotes(votes)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} 
      </div>
      <VoteButton selected={selected} votes={votes} setVotes={setVotes}/>
      <Button anecdotes={anecdotes} setSelected={setSelected} selected={selected}/>
      <p>has {votes[selected]} votes</p>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[maxIndex]}
      </div>
      <p>has {max} votes</p>
    </div>
  )
}
export default App
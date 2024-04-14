/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const StatisticLine = ({text, value}) => {

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
} 
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = all /3;
  const positive = 100 * good / all + ' % ';
  if(all !== 0) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good: " value={good}/>
            <StatisticLine text="Neutral: " value={neutral}/>
            <StatisticLine text="bad: " value={bad}/>
            <StatisticLine text="All: " value={all}/>
            <StatisticLine text="Average: " value={average}/>
            <StatisticLine text="Positive: " value={positive}/>
          </tbody>
        </table>
      </>
    );
  }
    else {
      return (
        <>
          <h1>Stastistics</h1>
          <p>No Feedback Given</p>
        </>
      )
    }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
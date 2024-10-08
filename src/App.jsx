import UserInput from "./components/UserInput"
import { useState } from "react";
import ResultsTable from './components/ResultsTable';
function App() {

  const [userInput, setUserInput] = useState(  {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      };
  });
}
  return (
  <main>
    <UserInput userInput={userInput} onChange={handleChange} />
     <ResultsTable input={userInput} />
  </main>
   
  )
}

export default App

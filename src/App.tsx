import "./styles.css";
import Question from "./components/Question";
import Summary from "./components/Summary";
import { useState } from "react";

export default function App() {
  const [activeNumber, setActiveNumber] = useState(0);
  const [summaries, setSummaries] = useState([]);
  const numberOfSteps = 3;

  const handleNext = () => {
    setActiveNumber((old) => old + 1);
  };

  return (
    <div className="App-1 p-5">
      <h1>Wizard</h1>
      <br />
      {[...Array(numberOfSteps)].map(
        (_, i) =>
          activeNumber === i && (
            <Question
              key={i}
              step={i + 1}
              onClick={handleNext}
              onChange={(e: any) => {
                if (summaries[i]) {
                  var temp = [...summaries];
                  temp.splice(i, 1, e.target.value);
                  setSummaries(temp);
                } else {
                  temp = [...summaries];
                  temp.push(e.target.value);
                  setSummaries(temp);
                }
              }}
            />
          )
      )}
      {activeNumber === 3 && <Summary summaries={summaries} />}
    </div>
  );
}

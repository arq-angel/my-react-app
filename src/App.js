import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";
import { CounterButton } from "./CounterButton";
import { CongratulationsMessage } from "./CongratulationsMessage";

const people = [
  {
    name: "Arjun",
    age: 40,
    hairColor: "Brown",
  },
  {
    name: "Helga",
    age: 25,
    hairColor: "red",
  },
  {
    name: "Dwayne",
    age: 55,
    hairColor: "blonde",
  },
];

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage ? null : (
          <CongratulationsMessage
            numberOfClicks={numberOfClicks}
            threshold={10}
            onHide={() => setHideMessage(true)}
          />
        )}

        <CounterButton
          onIncrement={increment}
          numberOfClicks={numberOfClicks}
        />
      </header>
    </div>
  );
}

export default App;

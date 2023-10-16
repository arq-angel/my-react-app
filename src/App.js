import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";

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
  let adjective = "cool!";
  let url = "https://reactjs.org";

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "red", fontSize: "96px" }}>Big Red Text</p>
        <Greeting name="Arjun" numberOfMessages={100} />
        <PeopleList people={people} />
        <button onClick={() => alert("Hello!")}>Click Me</button>
        <p>This is {adjective}</p>

        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import Values from "values.js";
import React, { useState } from "react";
import "./App.css";

function App() {

const[colour, setColour] = useState("");
const [error, setError] = useState(false);
const [list,setList]= useState([]);


const handleSubmit =(e)=> {
  e.preventDefault ();
  console.log('hello');
}


  return (
    <div className="App">
      <section className="Container">
        <h1>Colour Generator </h1>
        <form onSubmit={handleSubmit}>
          <input type="text"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          >
          </input>
          <button className="btn" type="submit">
            Search 
          </button>
        </form>
      </section>
      <section className="colours">
        <h2>List here</h2>
      </section>
    </div>
  );
}

export default App;

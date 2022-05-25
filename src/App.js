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
      <header className="App-header">

        
        <h1>Colour Generator </h1>
      </header>
    </div>
  );
}

export default App;

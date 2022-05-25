import Values from "values.js";
import React, { useState } from "react";
import Singlecolour from "./Singlecolour"
import "./App.css";

function App() {

const[colour, setColour] = useState("");
const [error, setError] = useState(false);
const [list,setList]= useState([]);


const handleSubmit =(e)=> {
  e.preventDefault ();
try{
let Colours = new Values(colour).all(10);
setList(Colours)
console.log(Colours);
} catch (error){
 setError(true);
 alert("Error, value is incorrect !");
 console.log(error);
}

}


  return (
    <div className="App">
      <section className="Container">
        <h1>Colour Generator </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#"
            className={`${error ? "error" : null}`}
          ></input>
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </section>
      <section className="colours">
        <h2>List here</h2>

        {list.map((colour, index) => {
          return <Singlecolour key={index} {...colour} index={index} />;
        })}
      </section>
    </div>
  );
}

export default App;

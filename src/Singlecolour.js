import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils";

const Singlecolour = ({ rgb, weight, index, hexColour }) => {
  const [alert, setAlert] = useState(false);
   const bcg = rgb.join(",");
   const hex = rgbToHex(...rgb);
   const hexValue = `#${hexColour}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`colour ${index > 6 && "colourlight"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      {" "}
      <h6>Single Colour</h6>
      <p className="percentvalue">{weight}%</p>
      <p className="colourvalue">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};





export default Singlecolour;

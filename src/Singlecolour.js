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
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`colour ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percentvalue">{weight}%</p>
      <p className="colourvalue">{hexValue}</p>
      <h4>Single Colour</h4>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};





export default Singlecolour;

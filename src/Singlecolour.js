import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils";

const Singlecolour = ({rgb, weight, index }) => {
    const [alert, setAlert] =useState(false);
    const bcg = rgb.join(',')


      return (
        <article
          className={`colour`}
          style={{ backgroundcolour: `rgb(${bcg})` }}
        >
          <h4>Single Colour</h4>
        </article>
      );
}





export default Singlecolour;

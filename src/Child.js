import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";



function Child({colorHandle, childColor}) {

  function childColorHandler() {
    let newestColor = getRandomColor()
    colorHandle(newestColor)
  }

  return <div 
  className="child" 
  style={{ backgroundColor: childColor }} 
  onClick={childColorHandler} />;
  
}


export default Child;

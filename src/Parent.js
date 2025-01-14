import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {

  
  const randomColor = getRandomColor();

  const [color, setColor] = useState(randomColor);
  
  const [childColor, setChildColor] =useState("#BBF")


  function onChangeColor(newestColor) {

    let newColor = getRandomColor();
    setColor(newColor)
    setChildColor(newestColor)
  }




  return (
    <div 
    className="parent" 
    style={{ backgroundColor: color }}
    >
      <Child colorHandle={onChangeColor} childColor={childColor} />
      <Child colorHandle={onChangeColor} childColor={childColor}/>
    </div>
  );
}

export default Parent;

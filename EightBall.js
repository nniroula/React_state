
import React, { useState } from "react";

function choice(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}


function EightBall(props) {
    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("black");
  
    function handleClick() {
      const { msg, color } = choice(props.answers);
      setMsg(msg);
      setColor(color);
    }
  
    return (
      <div
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        <b>{msg}</b>
      </div>
    );
  }
  
  
export default EightBall;
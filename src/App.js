import "./styles.css";
import React, { useState } from "react";

let bgcolorbg = "orange";
let colorsText = "green";
let data = "Project 123 started";

function App() {
  const [bgcolor, setBgcolor] = useState(bgcolorbg);
  const [text, setText] = useState(data);
  const [colors, setColors] = useState(colorsText);

  const changebgColor = () => {
    setBgcolor("cyan");
    setText("aaaaaaasss");
    setColors("red");
  };

  const normalData = () => {
    setBgcolor(bgcolorbg);
    setText(data);
    setColors(colorsText);
  };

  return (
    <>
      <div style={{ backgroundColor: bgcolor, color: colors }}>
        <h1 className="text-center">{text}</h1>
      </div>
      <button
        className="btn btn-dark"
        onClick={changebgColor}
        onDoubleClick={normalData}
      >
        Click me
      </button>
    </>
  );
}

export default App;

import "./styles.css";
import React, { useState } from "react";

function App() {
  const [textData, setTextData] = useState("");
  const [preData, setPreData] = useState("");
  const clearData = () => {
    setTextData("");
  };
  const handleData = (e) => {
    setTextData(e.target.value);
  };
  const previewData = () => {
    setPreData(textData);
  };
  return (
    <>
      <div className="container my-5">
        <textarea
          cols="30"
          rows="10"
          class="w-100"
          onChange={handleData}
          value={textData}
        >
          {textData}
        </textarea>
        <br />
        <button className="btn btn-dark my-3" onClick={clearData}>
          Clear Data
        </button>
        <p>{preData}</p>
        <button className="btn btn-success" onClick={previewData}>
          Preview Data
        </button>
        <p className="text-center text-danger">
          {textData.length} Characters are present inside text area
        </p>
        <p className="text-center text-success">
          {textData.split(" ").length} words are present inside
        </p>
      </div>
    </>
  );
}

export default App;

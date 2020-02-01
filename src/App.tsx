import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="question">5 + 5 = ?</div>
        <div className="answer">
          <input />
        </div>
        <div className="submit">Submit</div>
        <div className="wrong">Wrong Answer</div>
        <div className="correct">Correct Answer</div>
      </div>
    </div>
  );
};

export default App;

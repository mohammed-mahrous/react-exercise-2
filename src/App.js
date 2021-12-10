import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    numQuestions: 0,
    numCorrect: 0,
  };
  oncliked = () => {
    this.setState((currentstate) => ({
      numQuestions: currentstate.numQuestions + 1,
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
    }));
  };

  ontrueclicked = (proposedAnswer) => {
    this.setState((currentstate) => ({
      numCorrect:
        proposedAnswer ===
        currentstate.value1 + currentstate.value2 + currentstate.value3
          ? currentstate.numCorrect + 1
          : currentstate.numCorrect,
    }));
    this.oncliked();
  };
  onfalseclicked = (proposedAnswer) => {
    this.setState((currentstate) => ({
      numCorrect:
        proposedAnswer !==
        currentstate.value1 + currentstate.value2 + currentstate.value3
          ? currentstate.numCorrect + 1
          : currentstate.numCorrect,
    }));
    this.oncliked();
  };

  render() {
    const proposedAnswer =
      Math.floor(Math.random() * 3) +
      this.state.value1 +
      this.state.value2 +
      this.state.value3;
    const { numQuestions, numCorrect, value1, value2, value3 } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.ontrueclicked(proposedAnswer)}>
            True
          </button>
          <button onClick={() => this.onfalseclicked(proposedAnswer)}>
            False
          </button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

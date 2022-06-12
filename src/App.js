import { Component } from "react";
import "./App.css";
import dices from "./dices";
import Dice from "./Dice";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dices,
      values: { value1: dices[5], value2: dices[5] },
      class: "normal",
      button: "Roll",
      isDisabled: false,
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    this.setState({
      class: "animate",
      button: "Rolling...",
      isDisabled: true,
      buttonStyle: { backgroundColor: "green" },
      values: {
        value1: this.state.data[Math.floor(Math.random() * 6)],
        value2: this.state.data[Math.floor(Math.random() * 6)],
      },
    });
    setTimeout(() => {
      this.setState({
        class: "normal",
        button: "Roll",
        isDisabled: false,
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <h1>Roll Dice {this.state.num}</h1>
          <div className="dices">
            <Dice
              class={this.state.class}
              value={this.state.values.value1.dice}
            />
            <Dice
              class={this.state.class}
              value={this.state.values.value2.dice}
            />
          </div>
          <h1 className="dice-name">
            {this.state.values.value1 === this.state.values.value2
              ? `${this.state.values.value1.name} qoşa`
              : `${this.state.values.value1.name} - ${this.state.values.value2.name}`}
          </h1>
          <button onClick={this.rollDice} disabled={this.state.isDisabled}>
            {this.state.button}
          </button>
        </div>
      </div>
    );
  }
}

export default App;

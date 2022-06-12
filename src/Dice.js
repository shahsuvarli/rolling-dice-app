import { Component } from "react";

class Dice extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className={`dice-${this.props.class}`}>
        {this.props.value}
      </div>
    );
  }
}

export default Dice;

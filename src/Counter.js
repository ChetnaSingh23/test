import React from 'react';
import Preethi from './preeti/Preethi';
import Sowmya from './sowmya/Sowmya';  //import ur new files

 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        INCREASE COUNT : {this.state.count}
      </button>
      <h1>{this.state.count}</h1>
      <button
        onClick={() => {
          this.setState({ count: this.state.count - 1 });
        }}
      >
        DECREASE COUNT : {this.state.count}
      </button>
      <h1>{this.state.count}</h1>
      <Sowmya />
      <Preethi /> {/* ADD NEW COMPONENT*/}
      </div>
      
    );
  }
}
export default Counter;
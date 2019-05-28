import React from 'react';
import Preethi from './Preethi';
import Sowmya from './Sowmya';

 
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
      <Preethi />
      </div>
      
    );
  }
}
export default Counter;
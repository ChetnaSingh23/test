import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
 /** TASKKKK---
    * PLACE A ANCHOR TAG WHICH WILL OPEN GOOGLE.COM in different tab
    
    */
class Sowmya extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <h2>Sowmya</h2>
        <a href="https://www.google.com">Google</a><br/>
        <p>This is a paragraph.You have to write a paragraph.</p><br/>
        <label for="color_example">Color:</label>
        <input type="color" name="color_example" /> <br />
        <label for="date_and_time">Date with time:</label>
        <input type="datetime-local" name="date_and_time" /><br />
        <label for="week">Week:</label>
        <input type="week" name="week" /><br />
      </div>
      
    );
  }
}
export default Sowmya;
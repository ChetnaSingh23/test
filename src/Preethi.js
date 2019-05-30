import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
 /** TASKKKK---
    * PLACE A ANCHOR TAG WHICH WILL OPEN GOOGLE.COM
    PLACE A PARAGRAPH TAG WITH SOME USEFUL DATA
    INPUT TYPE COLOR, DATE TIME AND WEEK
    from line 24
    */
class Preethi extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <h2>Preethi</h2> 
        <p>helllo PARAGRAPH tagged</p>
        <p> <a href="http://google.com">Google</a> </p>
        <p> Color: <input type="color" name="color_input_test" value="#ff0000" /> </p> 
        <p> Date: <input type="date" name="date_input_test" /> </p> 
        <p> Time: <input type="time" name="time_input_test" /> </p> 
        <p> Week: <input type="week" name="week_input_test" /> </p> 
      </div>
      
    );
  }
}
export default Preethi;
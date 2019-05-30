import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
 /** TASKKKK---
    * PLACE A ANCHOR TAG WHICH WILL OPEN GOOGLE.COM in different tab
    *DRAW A BIG RECTANGLE, DRAW A CIRCLE,
    *write a paragraph...(in lower case)
    *CHOOSE UR BACKGROUND COLOR
    * style ur headings of previous assignment, make the content in center
    
    */

let styles = {
  position: "relative",
  backgroundColor : "#869e9782",
  width: "30%",
  height:"30px",
}
let borderStyle = {
  textTransform : "uppercase",
  textAlign: "center",
  border: "4px solid blue",
  borderBottomColor: "black",
  borderBottomStyle: "solid",
  borderBottomWidth: "4px",
  backgroundColor: "#ccc",
  padding: "10px",
  marginLeft:"20px",
}
let square={
  backgroundColor : "#ccc",
  width:"100px",
  height:"100px",
  border:"2px solid black",
  borderRadius:"1px"
}
class Preethi extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

 
  render() {
    return (
      <div style={styles}>
        <h2>Preethi</h2> 
        <p style={borderStyle}> helllo PARAGRAPH tagged</p>
        <p> <a href="http://google.com">Google</a> </p>
        <p> Color: <input type="color" name="color_input_test" value="#ff0000" /> </p> 
        <p> Date: <input type="date" name="date_input_test" /> </p> 
        <p> Time: <input type="time" name="time_input_test" /> </p> 
        <p> Week: <input type="week" name="week_input_test" /> </p> 
        <div>
          <p style={square}>
          </p>
        </div>
      </div>
      
    );
  }
}
export default Preethi;
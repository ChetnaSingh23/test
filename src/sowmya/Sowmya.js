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

let divStyles = {
  margin: "auto",
  background: "darkseagreen",
  width: "60%",
  height: "auto",
  padding: "15px",
  boxSizing: "border-box",
  boxShadow: "0 0 10px gray",
  color: "gainsboro"
}

let h2Styles = {
  textAlign: "center",
  color: "indianred",
  paddingBottom: "10px",
  borderBottom: "1px solid gray"
}

let aStyles = {
  textDecoration: "none"
}

let pStyles = {
  textTransform: "lowercase"
}

let divRectangle = {
  margin: "10px auto",
  width: "200px",
  height: "100px",
  border: "1px solid gray",
  background: "slategrey"
}

let divCircle = {
  margin:"auto",
  width:"100px",
  height:"98px",
  border: "1px solid gray",
  borderRadius: "50px",
  background: "whitesmoke"
}

let labelStyles = {
  fontSize: "20px",
  fontWeight: "600",
  paddingRight: "10px"
}

let inputStyles1 = {
  margin: "10px 0px",
  borderRadius: "5px"
}

let inputStyles = {
  margin: "10px 0px",
  padding: "5px 0px",
  borderRadius: "5px"
}

let h3Styles = {
  textAlign: "center",
  color: "indianred"
}

class Sowmya extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div style = {divStyles}>
        <h2 style={h2Styles}>Sowmya</h2>
        <a target="_blank" href="https://www.google.com" style={aStyles}>Google</a><br/>
        <p style={pStyles}>This is a paragraph.You have to write a paragraph Only With the help of P tag.</p>
        <label for="color_example" style={labelStyles}>Color</label>
        <input type="color" name="color_example" style={inputStyles1} /> <br />
        <label for="date_and_time" style={labelStyles}>Date with time</label>
        <input type="datetime-local" name="date_and_time" style={inputStyles} /><br />
        <label for="week" style={labelStyles}>Week</label>
        <input type="week" name="week" style={inputStyles} /><br />
        <h3 style={h3Styles}>Circle inside a rectangle</h3>
        <div style={divRectangle}>
          <div style={divCircle}></div>
        </div>
      </div>
      
    );
  }
}
export default Sowmya;
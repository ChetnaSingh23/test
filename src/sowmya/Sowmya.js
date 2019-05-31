import React from 'react';
import ArticleList from './ArticleList'
 
/**
 * A counter button: tap the button to increase the count.
 */
 /** TASKKKK---
    * PLACE A ANCHOR TAG WHICH WILL OPEN GOOGLE.COM in different tab
    *DRAW A BIG RECTANGLE, DRAW A CIRCLE,
    *write a paragraph...(in lower case)
    *CHOOSE UR BACKGROUND COLOR
    * style ur headings of previous assignment, make the content in center

    31-05-2019
    MAKE A COMPONENT IMPORT THE MOCK AND DISPLAY ALL THE ATTRIBUTES OF THAT MOCK PROPERLY, STYLE IN UR WAY
    
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
        <div>
        <h2>The datalist tag</h2>
        <input list="myval"/>
          <datalist id="myval">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">test</option>
            <option value="4">no</option>
            <option value="5">123hello</option>
            <option value="66">000nope</option>
          </datalist>
          Search:: <input  type="search"/>
          Prev search :::: <input type="text" />
          <input  type="radio"/> Male <br/>
          <input  type="radio"/> Female <br/>
        </div>
        <ArticleList/>
      </div>
      
    );
  }
}
export default Sowmya;
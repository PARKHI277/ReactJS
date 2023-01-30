import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
 

// Greeting Website
let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};
if (currDate > 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "  Good Night";
  cssStyle.color = "Black";
}
ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, {greeting}</h1>
    </div>
  </>,

  document.getElementById("root")
);

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// ReactDOM.render(
//   <div>
//     <h1>Learning React</h1>
//     <p>Will do</p>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   [<h1>Learning React</h1>, <p>Will do</p> , <p>New Day</p>],
//   document.getElementById("root")
// );

// jsx
// const fname = "Parkhi";
// // const lname = "Garg";

// ReactDOM.render(
//   <>
//     {/* <h1>My name is {fname + " " + lname}</h1> */}
//     <h1>{`My name is ${fname}`}</h1>
//     <p>my luck number is {5 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

// // template literals

// console.log(`My name is ${fname}`);

// // showing date

// const currDate = new Date().toLocaleDateString();

// ReactDOM.render(
//   <>
//     <p> Current Date is = {currDate}</p>
//   </>,
//   document.getElementById("root")
// );

// // jsx attribute

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true"> My name is {fname}</h1>
//   </>,
//   document.getElementById('root')
// );

// ReactDOM.render(<><h1 className = "heading"> My name is {fname}</h1></>,document.getElementById('root'));

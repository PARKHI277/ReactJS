import React from "react";
import ReactDOM from "react-dom";

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
const fname = "Parkhi";
const lname = "Garg";

ReactDOM.render(
  <>
    {/* <h1>My name is {fname + " " + lname}</h1> */}
    <h1>{`My name is ${fname}`}</h1>
    <p>my luck number is {5 + 5}</p>
  </>,
  document.getElementById("root")
);

// template literals

console.log(`My name is ${fname}`);

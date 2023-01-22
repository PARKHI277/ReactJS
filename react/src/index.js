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

ReactDOM.render(
  [<h1>Learning React</h1>, <p>Will do</p>],
  document.getElementById("root")
);

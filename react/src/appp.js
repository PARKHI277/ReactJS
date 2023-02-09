import React from "react";
// import Heading from "./Heading";
import { add, sub } from "./calc";

function App() {
  return (
    <>
      <ul>
        <li>Sum of two number is {add(40, 4)}</li>
        <li>Difference of two number is {sub(40, 4)}</li>
      </ul>
    </>
  );
}
// function App() {
//   return(
//   <>
//     <Heading />
//   </>)
// }

// function App() {
//   let currDate = new Date();
//   currDate = currDate.getHours();
//   let greeting = "";
//   const cssStyle = {};
//   if (currDate > 1 && currDate < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
//   } else if (currDate >= 12 && currDate < 19) {
//     greeting = "Good Afternoon";
//     cssStyle.color = "Orange";
//   } else {
//     greeting = "  Good Night";
//     cssStyle.color = "Black";
//   }

//   return (
//     <>
//       <div>
//         <h1>Hello Sir, {greeting}</h1>
//       </div>
//     </>
//   );
// }

export default App;

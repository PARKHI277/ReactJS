import React from "react";
import { useState } from "react";

const App = () => {
  // using useState
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const submitButton = () => {
    setFullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input>
          type = "text" placeHolder = "What is your name" onChange =
          {inputEvent}
        </input>

        <button onClick={submitButton}> Click Me </button>
      </div>
    </>
  );
};
// const SlotM = () => {
//     let x = "A";
//     let y = "B";
//     let z = "C";

//     if ((x === y) && (y === z)) {
//         return (
//             <>
//                 <div className="slot_inner">
//                     <h1>
//                         {x} {y}{z}
//                     </h1>
//                     <h1>This is matching</h1>
//                     <hr />
//                 </div>
//             </>
//         );

//     }
//     else {
//         return (
//             <>
//                 <div className="slot_inner">
//                     <h1>
//                         {x} {y}{z}
//                     </h1>
//                     <h1>This is matching</h1>
//                     <hr />
//                 </div>
//             </>
//         );
//     }
// }

// const App = () => {
//   return (
//     <>
//       <h1>
//         {" "}
//         Welcome to <span style={{ fontWeight: "bold" }}>Slot machine Game</span>
//       </h1>
//           <div className="slotmachine">
//               <slotM x="A" y="B" z="C" />
//               <hr />

//       </div>
//     </>
//   );
// }

export default App;

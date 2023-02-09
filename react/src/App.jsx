import React from "react";


const SlotM = () => {
    let x = "A";
    let y = "B";
    let z = "C";

    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y}{z}
                    </h1>
                    <h1>This is matching</h1>
                    <hr />
                </div>
            </>
        );

        
    }
    else {
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y}{z}
                    </h1>
                    <h1>This is matching</h1>
                    <hr />
                </div>
            </>
        );
    }
}


const App = () => {
  return (
    <>
      <h1>
        {" "}
        Welcome to <span style={{ fontWeight: "bold" }}>Slot machine Game</span>
      </h1>
          <div className="slotmachine">
              <slotM x="A" y="B" z="C" />
              <hr />
              
      </div>
    </>
  );
}

    export default App;
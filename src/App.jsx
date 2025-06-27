import "./App.css";
import Input from "./component/input";
import Buttons from "./component/buttons";
import { useState } from "react";
function App() {
  const [clickedKey, setClickedKey] = useState("");

  function handleClick(v) {
    if(v==="C"){
      setClickedKey("");
    } else if(v==="="){
      try{
const evaluation=eval(clickedKey).toString();
      setClickedKey(evaluation);
      }
      catch{
        setClickedKey("Error");
      }
    }   
    else{
       if (clickedKey === "Error") {
      setClickedKey(v); // start fresh
    } else {
 const finalValue=[...clickedKey,v];
      setClickedKey(finalValue.join(""));
    }
     
    }
  }
  

  return (
    <>
      <div className="body-Class">
        <center>
          <Input clickedKey={clickedKey}></Input>
          <Buttons handleClick={handleClick}></Buttons>
        </center>
      </div>
    </>
  );
}

export default App;

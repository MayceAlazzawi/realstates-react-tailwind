import React from "react";
import "./index.css";
import { Button } from "./components/Button";
import { useRef } from "react";

function App() {
  const ref = useRef(null!);
  const handleClick = () => console.log("CLICKED", ref.current);

  return (
    <div className="App text-mint font-body ">
      <Button onClick={handleClick} ref={ref}>
        Test
      </Button>
    </div>
  );
}

export default App;

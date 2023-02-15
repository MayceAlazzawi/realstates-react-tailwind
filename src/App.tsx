import React, { FC } from "react";
import "./index.css";
import { Navbar } from "./components/Navbar";
const App: FC = () => {
  return (
    <div className="App font-body bg-salmon">
      <Navbar />
    </div>
  );
};

export default App;

import React, { FC } from "react";
import "./index.css";
import { Button } from "./components/Button";
import Send from "./assets/icons/send.svg";

const App: FC = () => {
  const clickHandler = () => {
    console.log("Hi");
    return "Hi";
  };
  return (
    <div className="App text-mint font-body ">
      <Button
        bgBtn={"mint"}
        textSize={"[14px]"}
        color={"darkGreen"}
        fontWeight={"[500]"}
        width={"84"}
        m={" m-[3px]"}
        p={"[16px]"}
        children={"ابحث"}
        onClick={clickHandler}
        icon={Send}
      />
    </div>
  );
};

export default App;

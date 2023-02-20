import * as React from "react";
import { Card } from "./Card";
import { Button } from "../Button";
import Send from "../../assets/icons/send.svg";

export interface Props {}

export function Container(props: Props) {
  const clickHandler = () => {
    return "hi";
  };
  return (
    <div className="m-40 w-full p-4 ">
      <div className=" 1 flex flex-row justify-between items-center">
        <div className=" px-8">
          <Button
            bgBtn={"[#fff]"}
            textSize={"[14px]"}
            color={"darkGreen"}
            fontWeight={"[500]"}
            width={"84"}
            m={" m-[0px]"}
            p={"[16px]"}
            children={"مشاهدة المزيد"}
            onClick={clickHandler}
            icon={Send}
          />
        </div>
        <div className="bg-mintLight text-right px-8">
          <h2>h</h2> <p>dsd</p>
        </div>
      </div>
      <div className="  grid grid-cols-3 gap-4 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

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
            border={"border"}
            width={"[85px]"}
            m={" m-[0px]"}
            p={"p-[20px]"}
            children={"مشاهدة المزيد"}
            onClick={clickHandler}
            icon={Send}
            other={"border border-mint "}
          />
        </div>
        <div className="bg-mintLight text-right px-8">
          <h2 className="text-[32px] font-semibold ">احدث العقارات</h2>{" "}
          <p className="text-[16px] font-[400] text-gray ">
            شاهد المزيد من الفرص من خلال الضغط على زر مشاهدة المزيد
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4 p-4">
        <div className=" ">
          <Card />
        </div>
        <div className=" ">
          <Card />
        </div>
        <div className=" ">
          <Card />
        </div>
      </div>
    </div>
  );
}

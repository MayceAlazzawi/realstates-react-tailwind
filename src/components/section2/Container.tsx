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
    <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full mt-[200px] md:mt-40 md:mb-20 bg-[#fafbfc] ">
      <div className="flex flex-row justify-between items-center flex-col md:flex-row md:flex-row-reverse">
        <div className="bg-mintLight flex justify-center items-center flex-col gap-1 md:items-end md:justify-end">
          <h2 className="text-[32px] font-semibold ">احدث العقارات</h2>
          <p className="text-[16px] font-[400] text-gray flex justify-center items-center text-center">
            شاهد المزيد من الفرص من خلال الضغط على زر مشاهدة المزيد
          </p>
        </div>
        <div className=" ">
          <Button
            bgBtn={"[#fff]"}
            textSize={"[14px]"}
            color={"darkGreen"}
            fontWeight={"[500]"}
            border={"border border-mint"}
            width={"[85px]"}
            m={" m-[0px]"}
            p={"p-[20px]"}
            children={"مشاهدة المزيد"}
            onClick={clickHandler}
            // icon={Send}
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-4 md:grid-cols-3 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

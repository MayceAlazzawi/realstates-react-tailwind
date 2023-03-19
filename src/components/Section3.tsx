import * as React from "react";
import { Button } from "./Button";
import { ContainersHeader } from "./ContainersHeader";
import Send from "../assets/icons/send.svg";
import Hero0 from "../assets/images/hero0.png";
import Tea from "../assets/images/tea.png";
import Building from "../assets/images/building.png";

export interface Props {}

export default function Section3(props: Props) {
  const clickHandler = () => {
    console.log("Hi");
    return "Hi";
  };
  return (
    <div className="w-full mt-8 mb-8 bg-[#fafbfc] ">
      <ContainersHeader
        title="الشراء في تركيا"
        subtitle="لمشاهدة المزيد من المواضيع المختصة بالاقامة و الحياة في تركيا اضغط على زر مشاهدة المزيد"
      />
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between  max-w-screen-xl px-4 mx-auto lg:px-12  rounded-xl ">
        <div className="w-1/2 flex justify-center flex-col items-center object-cover w-full relative z-0  ">
          <img src={Building} alt="" className="rounded-xl h-[480px] w-full" />
          <div
            className="bottom flex flex-col absolute z-100 w-full h-1/2 mt-[240px] justify-center items-center rounded-xl"
            style={{
              background:
                "linear-gradient(rgb(27 31 37 / 10%), rgb(28 33 40 / 83%), #0b0c0bde)",
            }}
          >
            <p className="font-bold text-[34px] text-center p-1 text-[#fff] md:mt-[8px] md:mt-[45px]">
              دليلك الشامل من اجل الحصول على الجنسية التركية
            </p>
            <Button
              bgBtn={" bg-mint"}
              textSize={"[14px]"}
              color={"darkGreen"}
              fontWeight={"[500] "}
              width={" w-[80px]"}
              m={" m-[3px]"}
              p={"[16px]"}
              children={"اقرا المزيد"}
              onClick={clickHandler}
              icon={Send}
            />
          </div>
        </div>

        <div className="w-1/2 flex justify-center flex-col items-center object-cover w-full relative z-0  ">
          <img src={Tea} alt="" className="rounded-xl h-[480px] w-full" />
          <div
            className="bottom flex flex-col absolute z-100 w-full h-1/2 mt-[240px] justify-center items-center rounded-xl"
            style={{
              background:
                "linear-gradient(rgb(27 31 37 / 0%), rgb(28 33 40 / 83%), #0b0c0bde)",
            }}
          >
            <p className="font-bold text-[35px] text-center pb-1 md:pb-1 px-4 md:px-14 text-[#fff] mt-[43px] md:mt-[45px]">
              كل ما تحتاج معرفته عن الاقامة في تركيا
            </p>
            <Button
              bgBtn={" bg-mint"}
              textSize={"[14px]"}
              color={"darkGreen"}
              fontWeight={"[500] "}
              width={"- w-[80px]"}
              m={" m-[3px]"}
              p={"[16px]"}
              children={"اقرا المزيد"}
              onClick={clickHandler}
              icon={Send}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

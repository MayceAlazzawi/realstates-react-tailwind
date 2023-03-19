import * as React from "react";
import Hero0 from "../../assets/images/hero0.png";

export interface Props {}

export const Card = (rops: Props) => {
  return (
    <div className="">
      <div className="flex  md:p-[16px] flex-col gap-2 md:flex-row items-center rounded-[16px] bg-[#fff] shadow-xl p-2 md:justify-right md:flex-row-reverse md:justify-start">
        <div className="img">
          <img
            className="w-full h-[90px] md:w-[90px] md:h-[90px] rounded-lg  md:pr-0"
            src={Hero0}
            alt=""
          />
        </div>
        <div className="bg-[#0000] text-center md:text-right">
          <div className=" font-semibold text-[16px]  text-[#183118eb] dark:text-gray-400">
            اسطنبول، تركيا
          </div>
          <div className="2 flex md:gap-2 flex-col md:flex-row md:justify-between flex-col-reverse  ">
            <span>١٢٠٠٠ليرة</span>
            <span>. </span>
            <span> ٣+١ </span>
            <span>. </span>
            <span>كوجاتبة </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import * as React from "react";
import Hero0 from "../../assets/images/hero0.png";

export interface Props {}

export const Card = (rops: Props) => {
  return (
    <div className="">
      {/* <a
        href="#"
        className="flex flex-col justify-end items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex text-right h-[90px] p-[6px] max-w-max items-center"
      >
        <div className="w-full md:w-1/3 h-full md:m-2 md:mr-0 rounded-lg flex justify-center items-center">
          <img
            className=" w-full rounded-lg h-full p-1 md:pr-0"
            src={Hero0}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between ">
          <h5 className="mb-2 text-[16px] mdt:text-[16px] font-semibold tracking-tight text-[#547e6f] dark:text-white">
            اسطنبول، تركيا
          </h5>
          <p className="mb-3 font-light text-[14px] flex flex-col md:flex-row text-gray-700 dark:text-gray-400">
            <span>كوجاتبة</span> <span>3 + 1</span>
            <span> 1000000ليرة </span>
          </p>
        </div>
      </a> */}
      <div className="flex flex-col md:flex-row items-center rounded-lg shadow-lg p-2 md:justify-right md:flex-row-reverse md:justify-start">
        <div className="img md:w-1/3">
          <img
            className=" w-full rounded-lg h-full p-1 md:pr-0"
            src={Hero0}
            alt=""
          />
        </div>
        <div className="info flex flex-col text-right">
          <h5 className=" text-[16px] mdt:text-[16px] font-semibold  tracking-tight  text-[#547e6f] dark:text-white">
            اسطنبول، تركيا
          </h5>
          <p className="  font-light text-[14px] flex flex-col md:flex-row text-gray-700 dark:text-gray-400"></p>
          <span>كوجاتبة</span> <span>3 + 1</span>
          <span className=""> 1000000 ليرة</span>
        </div>
      </div>
    </div>
  );
};

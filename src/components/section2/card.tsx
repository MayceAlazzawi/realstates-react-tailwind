import * as React from "react";
import Hero0 from "../../assets/images/hero0.png";

export interface Props {}

export const Card = (rops: Props) => {
  return (
    <div className="">
      <a
        href="#"
        className="flex flex-col  justify-end items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex text-right h-[90px] p-[6px] max-w-max items-center"
      >
        <div className="flex flex-col justify-between  leading-normal">
          <h5 className="mb-2 text-[16px] font-semibold tracking-tight text-[#547e6f] dark:text-white">
            اسطنبول، تركيا
          </h5>
          <p className="mb-3 font-light text-[14px] text-gray-700 dark:text-gray-400">
            كوجاتبة . 3+1 . 1000000ليرة
          </p>
        </div>
        <div className=" w-1/3 h-full m-2 mr-0 rounded-lg ">
          <img
            className=" w-full rounded-lg h-full p-1 pr-0"
            src={Hero0}
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

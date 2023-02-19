import * as React from "react";
import Hero0 from "../../assets/images/hero0.png";

export interface Props {}

export const Card = (rops: Props) => {
  return (
    <div className="m-40">
      <a
        href="#"
        className="flex flex-col  justify-end items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex text-right h-[110px] p-[16px] w-max"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-[16px] font-semibold tracking-tight text-[#547e6f] dark:text-white">
            اسطنبول، تركيا
          </h5>
          <p className="mb-3 font-light text-[14px] text-gray-700 dark:text-gray-400">
            كوجاتبة . 3+1 . 1000000ليرة
          </p>
        </div>
        <div className="bg-mint w-1/3 h-[90px] m-2 rounded-lg">
          {" "}
          <img
            className=" w-full rounded-lg h-96 md:h-auto md:w-48  "
            src={Hero0}
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

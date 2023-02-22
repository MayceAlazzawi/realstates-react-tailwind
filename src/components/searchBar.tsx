import * as React from "react";
import { useState } from "react";
import { Button } from "./Button";
import Send from "../assets/icons/send.svg";
import { CityDropDown } from "./CityDropdown";
import Data from "../jsonData/Cities.json";
export interface Props {}

export function SearchBar(props: Props) {
  const [isOpen, setIsOpen] = useState<string | null>("hidden");
  const clickHandler = () => {
    isOpen !== "block" ? setIsOpen("block") : setIsOpen("hidden");
    return "hi";
  };
  return (
    <section className=" dark:bg-gray-900 flex items-center mt-[-90px] z-20 absolute w-full mt-4">
      <div className=" max-w-screen-xl px-4 mx-auto lg:px-12  w-full ">
        {/* <!-- Start coding here --> */}
        <div className="relative bg-[#fff] shadow-md dark:bg-gray-800 sm:rounded-lg rounded-[1.5rem] flex flex-col md:flex-col gap-4 ">
          <div className="grid md:grid-cols-5 pt-0 mt-0 h-8 w-3/3 align-center">
            <div className="flex flex-row  divide-x divide-[#D7E2EE] ">
              <div className="buying w-1/2 md:p-1 text-center">
                <button className="text-[10px] align-center   text-darkGreen font-semibold md:text-[12px]">
                  شـراء عقارات
                </button>
              </div>
              <div className="seling w-1/2 md:p-1 text-center">
                <button className="text-[10px] text-darkGreen font-semibold md:text-[12px]">
                  بـيع عقارات
                </button>
              </div>
            </div>
            {/* <button className="text-[10px] pt-1 text-darkGreen font-semibold md:text-[12px]">
              شـراء عقارات
            </button>
            <button className=" text-[10px] pl-2 pt-1 text-darkGreen font-semibold md:text-[12px]">
              بـيع عقارات
            </button> */}
          </div>
          <div className="px-4 pt-1 flex gap-1 flex-col justify-center items-center w-full md:flex-row ">
            <div className="three w-full md:w-1/5">
              <CityDropDown
                name="الـمواصفات"
                border="border"
                menuWidth="w-[10.5rem]"
                arrayOfItems={["1+0", "1+1", "2+1", "3+1", "4+1", "5+1"]}
                // item1="1+0"
                // item2="1+1"
                // item3="2+1"
                // item4="3+1"
              />
            </div>
            <div className="one md:w-2/5 w-full">
              <CityDropDown
                name="الـمديـنـة"
                border="border"
                menuWidth="w-[24.7rem]  "
                arrayOfItems={["1+0", "1+1"]}
                // item1="1+0"
                // item2="1+1"
                // item3="2+1"
                // item4="3+1"
              />
            </div>
            <div className="two md:w-2/5 w-full">
              <CityDropDown
                name="الـمحافظة"
                menuWidth="w-[24.7rem]"
                Data={Data}
                border="border"
                // item1="1+0"
                // item2="1+1"
                // item3="2+1"
                // item4="3+1"
              />
            </div>
          </div>
          <div className="py-1 px-4 flex justify-center md:justify-start">
            <Button
              bgBtn={"bg-mint"}
              textSize={"[10px] lg:text-[14px]"}
              color={"text-darkGreen"}
              fontWeight={"normal"}
              width={"119"}
              m={" mb-[18px]"}
              p={"md:px-[8px] px-4 "}
              children={" أبحث"}
              onClick={clickHandler}
              icon={Send}
              other={"bg-darkGreen"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

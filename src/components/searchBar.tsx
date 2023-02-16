import * as React from "react";
import { useState } from "react";
import { Button } from "./Button";
import Send from "../assets/icons/send.svg";

export interface Props {}

export function SearchBar(props: Props) {
  const [isOpen, setIsOpen] = useState<string | null>("hidden");
  const clickHandler = () => {
    isOpen !== "block" ? setIsOpen("block") : setIsOpen("hidden");
    return "hi";
  };
  return (
    // <div className="bg-mint absolute inset-0 flex justify-center items-center z-10 mt-[450px] dark:bg-gray-900 w-4/5 ">
    //   <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
    //     {/* <!-- Start coding here --> */}
    //     <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
    //       <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4"></div>
    //       <div className="w-full md:w-1/2">
    //         <form className="flex items-center">
    //           <label className="sr-only">Search</label>
    //           <div className="relative w-full">
    //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //               <svg
    //                 aria-hidden="true"
    //                 className="w-5 h-5 text-gray-500 dark:text-gray-400"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fill-rule="evenodd"
    //                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //                   clip-rule="evenodd"
    //                 />
    //               </svg>
    //             </div>
    //             <input
    //               type="text"
    //               id="simple-search"
    //               className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //               placeholder="Search"
    //             />
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className=" dark:bg-gray-900 flex items-center mt-[540px] z-20 absolute w-full ">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-12  w-full ">
        {/* <!-- Start coding here --> */}
        <div className="relative bg-[#fff] shadow-md dark:bg-gray-800 sm:rounded-lg px-[10px] py-2">
          <div className="grid grid-cols-6 divide-x">
            <button className="text-[12px]  font-semibold">شـراءعقارات</button>
            <button className=" text-[12px] font-semibold">بـيع عقارات</button>
          </div>
          <div>jj</div>
          <div className="pl-4">
            <Button
              bgBtn={"bg-mint"}
              textSize={"[14px]"}
              color={"text-darkGreen"}
              fontWeight={"semibold"}
              width={"119"}
              m={" m-[0px]"}
              p={"p-[8px]"}
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

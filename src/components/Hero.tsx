import * as React from "react";
// import Hero0 from "../assets/images/hero0.png";
import { SearchBar } from "./searchBar";
import { Navbar } from "../components/Navbar";

interface Props {}

export const Hero = (props: Props) => {
  return (
    <section className="w-full bg-hero bg-cover  dark:bg-gray-900 relative bg-no-repeat">
      <div className="bg-[#0b0c0bbd] flex flex-col gap-20 h-[601px]  bg-no-repeat  bg-cover">
        <Navbar />
        <div className="bg-gray-400 mx-auto w-full h-96 relative z-0 flex  justify-center items-center flex-col  md:w-full">
          <div className="py-8 px-4  max-w-screen-xl text-center lg:py-16 lg:px-12  text-[#fff] flex justify-center items-center flex-col relative z-0  w-full">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white  text-white">
              مـجـمـوعـة مـتـنـوعـة مـن
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white  text-white lg:w-[920px]">
              الـعـقارات و الـشـقـق و الاراضـي والمـزارع
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              لدينا مجموعة متنوعة من الشقق والأراضي والفيلل للبيع في كافة
              اسطنبول، و لدينا فريق متختصص من الخبراء العقاريين لمساعدتكم في
              شراء او لبيع عقارات في إسطنبول
            </p>
          </div>
        </div>
      </div>
      <SearchBar />
    </section>
  );
};

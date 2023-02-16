import * as React from "react";

interface Props {
  bgBtn: string | number;
  width: string | number;
  fontWeight: number | string;
  color: number | string;
  textSize: number | string;
  p: number | string;
  m: number | string;
  other?: string | number;
  children: string;
  onClick: () => string;
  icon: any;
}

export const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex flex-row  text-center align-center justify-center items-center gap-2 h-[48px] ${props.bgBtn} ${props.m} ${props.p} w-${props.width} font-${props.fontWeight} ${props.color} text-${props.textSize} rounded focus:outline-none cursor-pointer other`}
    >
      <img src={props.icon}></img>
      {props.children}
    </button>
  );
};

// <Button
//         bgBtn={"mint"}
//         textSize={"[14px]"}
//         color={"darkGreen"}
//         fontWeight={"[500]"}
//         width={"84"}
//         m={" m-[3px]"}
//         p={"[16px]"}
//         children={"ابحث"}
//         onClick={clickHandler}
//         icon={Send}
//       />

// import Send from "./assets/icons/send.svg";

// const clickHandler = () => {
//   console.log("Hi");
//   return "Hi";
// };

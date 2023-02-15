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
      className={`flex flex-row  text-center align-center justify-center items-center gap-2 h-[48px] bg-${props.bgBtn} ${props.m}  p-${props.p} w-${props.width} font-${props.fontWeight} text-${props.color} text-${props.textSize} rounded focus:outline-none cursor-pointer`}
    >
      <img src={props.icon}></img>
      {props.children}
    </button>
  );
};

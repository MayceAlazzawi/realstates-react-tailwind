// import * as React from "react";

// interface Props {
//   border: string;
//   color: string;
//   children?: React.ReactNode;
//   height: string;
//   onClick: () => void;
//   radius: string;
//   width: string;
// }
// const Button: React.FC<Props> = ({
//   border,
//   color,
//   children,
//   height,
//   onClick,
//   radius,
//   width,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="

//       "
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";
export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
>(function Button(props, ref) {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});

import React from "react";
const Atm_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.965 8.517A2.75 2.75 0 0 1 8.673 6.25h6.65a2.75 2.75 0 0 1 2.708 2.267l1.89 10.588a2.25 2.25 0 0 1-2.215 2.645H6.29a2.25 2.25 0 0 1-2.215-2.645zM12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m-1 8.263a1 1 0 0 0 1.013.987c.552-.007.994-.468.987-1.02a1 1 0 0 0-1.013-.988 1.007 1.007 0 0 0-.987 1.02"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 5.016A3.01 3.01 0 0 1 4 2h16c1.664 0 3 1.358 3 3.016v4.032c0 .486-.03 1.09-.253 1.627a2.15 2.15 0 0 1-1.496 1.293 1 1 0 0 1-.502-1.936c.077-.02.1-.041.104-.044a.2.2 0 0 0 .047-.079c.061-.148.1-.409.1-.861V5.016C21 4.447 20.545 4 20 4H4c-.545 0-1 .447-1 1.016v4.032c0 .452.039.713.1.861a.2.2 0 0 0 .047.079c.003.003.027.024.104.044a1 1 0 0 1-.502 1.936 2.15 2.15 0 0 1-1.496-1.293C1.03 10.137 1 9.535 1 9.048z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Atm_01;

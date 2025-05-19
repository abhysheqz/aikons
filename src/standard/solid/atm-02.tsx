import React from "react";
const Atm_02: React.FC<
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
        d="M1 5.016A3.01 3.01 0 0 1 4 2h16c1.664 0 3 1.358 3 3.016v4.032c0 .486-.03 1.09-.253 1.627a2.15 2.15 0 0 1-1.496 1.293 1 1 0 0 1-.502-1.936c.077-.02.1-.041.104-.044a.2.2 0 0 0 .047-.079c.061-.148.1-.409.1-.861V5.016C21 4.447 20.545 4 20 4H4c-.545 0-1 .447-1 1.016v4.032c0 .452.039.713.1.861a.2.2 0 0 0 .047.079c.003.003.027.024.104.044a1 1 0 0 1-.502 1.936 2.15 2.15 0 0 1-1.496-1.293C1.03 10.137 1 9.535 1 9.048z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.673 6.25h1.652l-1.66 15.5H6.29a2.25 2.25 0 0 1-2.215-2.645l1.89-10.588A2.75 2.75 0 0 1 8.673 6.25m9.033 15.5h-7.533l1.66-15.5h3.49a2.75 2.75 0 0 1 2.708 2.267l1.89 10.588a2.25 2.25 0 0 1-2.215 2.645M16 16a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Atm_02;

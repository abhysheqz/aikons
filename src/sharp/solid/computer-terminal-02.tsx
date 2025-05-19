import React from "react";
const ComputerTerminal_02: React.FC<
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
        d="M21.75 2.25H2.25v19.5h19.5zM8.155 18.405l9.25-11.562-1.562-1.25-9.25 11.563z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerTerminal_02;

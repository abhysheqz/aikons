import React from "react";
const PlusMinusSquare_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm4.707 15.457 10-10-1.414-1.414-10 10zM8 6.5V8H6.5v2H8v1.5h2V10h1.5V8H10V6.5zm9 7.5h-4v2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinusSquare_02;

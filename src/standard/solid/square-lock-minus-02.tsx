import React from "react";
const SquareLockMinus_02: React.FC<
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
        d="M5.5 6.5a5.5 5.5 0 1 1 11 0V9a1 1 0 1 1-2 0V6.5a3.5 3.5 0 1 0-7 0V9a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 8.25A2.75 2.75 0 0 0 2.25 11v9A2.75 2.75 0 0 0 5 22.75h7.938a6.25 6.25 0 0 1 6.812-10.364V11A2.75 2.75 0 0 0 17 8.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-1.5 4a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareLockMinus_02;

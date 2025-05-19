import React from "react";
const CircleLockMinus_01: React.FC<
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
        d="M5.5 6.75a5.5 5.5 0 1 1 11 0v3h-2v-3a3.5 3.5 0 1 0-7 0v3h-2zM20.75 18h-8v-2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 7.25a7.75 7.75 0 1 0 6.31 12.25h-6.06v-5h7.484A7.75 7.75 0 0 0 11 7.25"
      />
    </svg>
  );
};
export default CircleLockMinus_01;

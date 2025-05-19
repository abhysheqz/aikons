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
        d="M5.625 6.625a5.5 5.5 0 1 1 11 0v3a1 1 0 1 1-2 0v-3a3.5 3.5 0 1 0-7 0v3a1 1 0 1 1-2 0zM11.625 17.125a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.125 7.375a7.75 7.75 0 1 0 6.31 12.25h-4.81a2.5 2.5 0 0 1 0-5h6.234a7.75 7.75 0 0 0-7.734-7.25"
      />
    </svg>
  );
};
export default CircleLockMinus_01;

import React from "react";
const CircleLockAdd_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 22v-7m-3.5 3.5h7M10.675 21.998C6.64 22.095 3.5 18.806 3.5 14.999 3.5 11.133 6.697 8 10.64 8a7.17 7.17 0 0 1 5.86 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3"
      />
    </svg>
  );
};
export default CircleLockAdd_01;

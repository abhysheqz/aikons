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
        fill="currentColor"
        fillRule="evenodd"
        d="M17 14a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H18V22a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H16V15a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 7.25a7.75 7.75 0 1 0 4 14.39V21h-1a2.5 2.5 0 0 1 0-5h1v-1a2.5 2.5 0 0 1 3.392-2.336A7.75 7.75 0 0 0 10.5 7.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 6.5a5.5 5.5 0 1 1 11 0v3a1 1 0 1 1-2 0v-3a3.5 3.5 0 1 0-7 0v3a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleLockAdd_01;

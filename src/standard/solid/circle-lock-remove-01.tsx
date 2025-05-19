import React from "react";
const CircleLockRemove_01: React.FC<
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
        d="M5 6.5a5.5 5.5 0 1 1 11 0v3a1 1 0 1 1-2 0v-3a3.5 3.5 0 1 0-7 0v3a1 1 0 1 1-2 0zM12.793 14.293a1 1 0 0 1 1.414 0L17 17.086l2.793-2.793a1 1 0 0 1 1.414 1.414L18.414 18.5l2.793 2.793a1 1 0 0 1-1.414 1.414L17 19.914l-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 7.25a7.75 7.75 0 1 0 .607 15.477 2.5 2.5 0 0 1 .625-2.495l1.733-1.732-1.733-1.732a2.5 2.5 0 0 1 3.536-3.536L17 14.965l1.159-1.16-.111-.573A7.75 7.75 0 0 0 10.5 7.25"
      />
    </svg>
  );
};
export default CircleLockRemove_01;

import React from "react";
const Books_02: React.FC<
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
        d="M3 4.5h13.5A1.5 1.5 0 0 1 18 6v2a1.5 1.5 0 0 1-1.5 1.5H3M3 9.5h16.5A1.5 1.5 0 0 1 21 11v2a1.5 1.5 0 0 1-1.5 1.5H13m-10 0h5M3 14.5h5m-5 5h13.5A1.5 1.5 0 0 0 18 18v-2a1.5 1.5 0 0 0-1.5-1.5H13"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9.5v7l2.5-2 2.5 2v-7"
      />
    </svg>
  );
};
export default Books_02;

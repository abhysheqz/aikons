import React from "react";
const Books_01: React.FC<
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
        strokeWidth={1.5}
        d="M5.5 4.5C6.5 5 7 6 7 7s-.5 2-1.5 2.5M5.5 14.5C6.5 15 7 16 7 17s-.5 2-1.5 2.5M18.5 9.5C17.5 10 17 11 17 12s.5 2 1.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 4.5h14.5A1.5 1.5 0 0 1 21 6v2a1.5 1.5 0 0 1-1.5 1.5H5M19 9.5H4.5A1.5 1.5 0 0 0 3 11v2a1.5 1.5 0 0 0 1.5 1.5H19M5 14.5h14.5A1.5 1.5 0 0 1 21 16v2a1.5 1.5 0 0 1-1.5 1.5H5"
      />
    </svg>
  );
};
export default Books_01;

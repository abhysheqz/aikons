import React from "react";
const Hold_03: React.FC<
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
        d="M14.497 5.448V4a1.5 1.5 0 0 0-3 0v1m3 .448v6.907m0-6.907a1.5 1.5 0 0 1 3 .052V13m-3-7.552V5.5m-3-.5v6.421m0-6.421a1.5 1.5 0 0 0-3 0v9L6.19 11.837a1.683 1.683 0 0 0-2.423 2.26l4.14 6.48a2 2 0 0 0 1.686.923h7.905a3 3 0 0 0 3-3V8a1.5 1.5 0 0 0-3 0"
      />
    </svg>
  );
};
export default Hold_03;

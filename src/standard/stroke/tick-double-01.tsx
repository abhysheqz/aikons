import React from "react";
const TickDouble_01: React.FC<
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
        d="M2.5 13.833S4.5 15 6 17.5c0 0 .285-.48.821-1.247M16.5 6.5c-2.291 1.146-4.688 3.552-6.612 5.822M7.5 13.833S9.5 15 11 17.5c0 0 5.5-8.5 10.5-11"
      />
    </svg>
  );
};
export default TickDouble_01;

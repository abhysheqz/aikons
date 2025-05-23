import React from "react";
const PolyTank: React.FC<
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
        d="M9.375 4.769c-1.352.279-2.653.77-3.884 1.449A.96.96 0 0 0 5 7.066v12.19c0 .442.289.833.716.946 1.95.515 4.07.798 6.284.798 2.215 0 4.334-.283 6.284-.798a.97.97 0 0 0 .716-.946V7.066a.96.96 0 0 0-.49-.848 13.9 13.9 0 0 0-3.885-1.45m-5.25 0a13 13 0 0 1 5.25 0m-5.25 0V3a1 1 0 0 1 1-1h3.25a1 1 0 0 1 1 1v1.769"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20.5V18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.5M19 12c-2.144-.643-4.511-1-7-1s-4.856.357-7 1"
      />
    </svg>
  );
};
export default PolyTank;

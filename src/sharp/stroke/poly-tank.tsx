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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.375 4.769c-1.532.316-3 .906-4.375 1.731V20c2.144.643 4.511 1 7 1s4.856-.357 7-1V6.5a14 14 0 0 0-4.375-1.731m-5.25 0a13 13 0 0 1 5.25 0m-5.25 0V2h5.25v2.769"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 20.5V17h4v3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 12c-2.144-.643-4.511-1-7-1s-4.856.357-7 1"
      />
    </svg>
  );
};
export default PolyTank;

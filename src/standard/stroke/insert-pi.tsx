import React from "react";
const InsertPi: React.FC<
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
        d="M3 9a4.566 4.566 0 0 1 4.531-4H18c1.486 0 3-1 3-2.5M16.5 5.5 16 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5.5c-.133 3.063-.4 8.75-.8 10.5S8 19.5 6 19.5M17 16v1.5m0 0V19m0-1.5h1.5m-1.5 0h-1.333m5.333 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default InsertPi;

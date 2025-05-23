import React from "react";
const Coffee_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10.5h2c.977 0 1.465 0 1.765.36.3.362.221.786.064 1.634C20.899 17.5 16.5 17.5 16.5 17.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.437 20.902c-2.665-3.05-3.283-7.109-3.414-11.387A.99.99 0 0 1 3.015 8.5h13.97c.558 0 1.01.457.992 1.015-.13 4.278-.75 8.337-3.414 11.387-.346.396-.858.598-1.384.598H6.82c-.526 0-1.038-.202-1.384-.598M11.309 2.5C10.762 2.839 10 4 10 5.5M7.54 4S7 4.5 7 5.5M14.001 4c-.273.17-.501 1-.501 1.5"
      />
    </svg>
  );
};
export default Coffee_02;

import React from "react";
const Restaurant: React.FC<
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
        d="M3 12v5m0 0h2c1.414 0 2.121 0 2.56.44C8 17.878 8 18.585 8 20v1m-5-4v4M4 7l5.317-2.917C10.633 3.361 11.292 3 12 3s1.367.361 2.683 1.083L20 7M18 6v4M6 6v4M21 12v5m0 0h-2c-1.414 0-2.121 0-2.56.44C16 17.878 16 18.585 16 20v1m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1"
      />
    </svg>
  );
};
export default Restaurant;

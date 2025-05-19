import React from "react";
const ComputerArrowUp: React.FC<
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
        d="M16 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3M14.25 21H16m-1.75 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2.25 4h-4.5m0 0H8m1.75 0a1.5 1.5 0 0 0 1.5-1.5V17H12m0 0v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 10s2.21-3 3-3 3 3 3 3m-3-2.5V13"
      />
    </svg>
  );
};
export default ComputerArrowUp;

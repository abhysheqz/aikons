import React from "react";
const FourFinger_03: React.FC<
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
        d="M14 5.5V4a1.5 1.5 0 0 0-3 0v1m3 .5v6.855M14 5.5a1.5 1.5 0 0 1 3 0V13m-6-8v6.5M11 5a1.5 1.5 0 0 0-3 0v4m0 5V9m0 0-3.121 3.121A3 3 0 0 0 4 14.243v.349a3 3 0 0 0 .504 1.664l2.605 3.908A3 3 0 0 0 9.606 21.5H17a3 3 0 0 0 3-3V8a1.5 1.5 0 0 0-3 0"
      />
    </svg>
  );
};
export default FourFinger_03;

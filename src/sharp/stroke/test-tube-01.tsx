import React from "react";
const TestTube_01: React.FC<
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
        strokeWidth={2}
        d="m10 16.002.009-.002M15 18.502l.009-.002"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.008 2h10.018"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.012 11.562c.89-1.154 2.314-.322 4.007.763 2.226 1.426 3.562.332 4.007-.704"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.563 2.71v5.864l6.448 13.414a.01.01 0 0 1-.009.015H3.02a.01.01 0 0 1-.01-.015L9.506 8.574V2.71"
      />
    </svg>
  );
};
export default TestTube_01;

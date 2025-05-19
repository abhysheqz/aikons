import React from "react";
const TestTube_03: React.FC<
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
        strokeWidth={1.5}
        d="M14.498 2v5.427a7.5 7.5 0 1 1-5 0V2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 2h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.5 11.148s3-.926 5.5 1.852m7.5-1.389s-.612.98-1.5 1.389"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10 18.002.009-.002M14 14.002l.009-.002"
      />
    </svg>
  );
};
export default TestTube_03;

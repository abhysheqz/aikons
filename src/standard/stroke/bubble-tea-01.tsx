import React from "react";
const BubbleTea_01: React.FC<
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
        d="m18 9-1.296 11.23A2 2 0 0 1 14.717 22H9.284a2 2 0 0 1-1.987-1.77L6 9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 9 .514-1.286a5.908 5.908 0 0 1 10.972 0L18 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 9h14M13 9l3-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.009 16.5H10m4 1.5h-.009m-.98-4h-.009"
      />
    </svg>
  );
};
export default BubbleTea_01;

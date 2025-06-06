import React from "react";
const BlushBrush_01: React.FC<
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
        d="M15 7.153 20.154 2 22 3.846 16.846 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 16-2.69 5.38a.5.5 0 0 1-.8.13L7.5 19.5M8 11l-5.38 2.69a.5.5 0 0 0-.13.8L4.5 16.5m0 0L7 15m-2.5 1.5 3 3m0 0L8.998 17M17.5 9.5l-3-3L12 9l-4.576.458a.2.2 0 0 0-.122.34l6.9 6.903a.2.2 0 0 0 .34-.121l.459-4.58z"
      />
    </svg>
  );
};
export default BlushBrush_01;

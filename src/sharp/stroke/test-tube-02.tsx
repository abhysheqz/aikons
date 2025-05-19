import React from "react";
const TestTube_02: React.FC<
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
        d="M16 2v16a4 4 0 0 1-8 0V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 8.556c.889-1.153 2.31-.322 4 .762 2.222 1.426 3.556.332 4-.703"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 2h12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11 18.002.009-.002M13 14.002l.009-.002"
      />
    </svg>
  );
};
export default TestTube_02;

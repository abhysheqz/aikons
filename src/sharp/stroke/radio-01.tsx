import React from "react";
const Radio_01: React.FC<
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
        d="M22 5H2v17h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.397 11.25a4.5 4.5 0 0 1-7.793 4.5m7.793-4.5a4.5 4.5 0 0 0-7.793 4.5m7.793-4.5-7.793 4.5M17 2 7 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 9h.009"
      />
    </svg>
  );
};
export default Radio_01;

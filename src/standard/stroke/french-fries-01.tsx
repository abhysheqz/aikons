import React from "react";
const FrenchFries_01: React.FC<
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
        strokeWidth={1.6}
        d="M7.5 18a2.5 2.5 0 1 0-.5-4.95"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 8.5 8 4l2.6 1M10 9.5 11 2l3 1-1.5 7.5m.5.5 2.5-5h3L15 12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 12.5 5.5 8l3 14z"
      />
    </svg>
  );
};
export default FrenchFries_01;

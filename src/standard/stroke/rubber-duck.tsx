import React from "react";
const RubberDuck: React.FC<
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
        strokeWidth={1.5}
        d="M7.501 6v.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.627 6a4.002 4.002 0 0 1 7.874 1 4 4 0 0 1-1.354 3h5.832C18.357 10 19 8.88 19 7.5c3.5 3.5 2.969 7.5 2.969 7.5 0 3.5-3.469 6-8.969 6h-4.01a5.495 5.495 0 0 1-5.49-5.5c0-2.19 1.277-4.08 3.126-4.965A4 4 0 0 1 5.037 9m-.41-3L2.001 7c.19 1 1.063 2 3.035 2m-.409-3 .587.855A1.7 1.7 0 0 1 5.036 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.001 18h1.5c2.21 0 5-2.79 5-5h-6.5a2.5 2.5 0 0 0 0 5"
      />
    </svg>
  );
};
export default RubberDuck;

import React from "react";
const Tips: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 8.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.831 5.423A3.502 3.502 0 0 0 8 6.5a3.5 3.5 0 0 0 5.169 3.077"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 13h2.486a2 2 0 0 1 .964.248l2.05 1.127h1c1.5 0 2.5 1.149 2.5 2.125l-2.684.894a1 1 0 0 1-.632 0L7 16.5m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155v0a.877.877 0 0 1-.422 1.11l-7.585 3.792a2 2 0 0 1-1.44.136L4 19.019"
      />
    </svg>
  );
};
export default Tips;

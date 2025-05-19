import React from "react";
const Waze: React.FC<
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
        d="M17.5 9v.01M10.5 9v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 13s1 2 3.5 2 3.5-2 3.5-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 19.945c.684.042 1.357.055 2 .055a9 9 0 1 0-9-9c0 1.039 0 3-2 4 1.058 2.38 2.974 3.64 5.126 4.3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 22a2 2 0 0 0 1.163-3.627c-.935.656-2 1.139-3.15 1.401A2 2 0 0 0 17 22Z"
      />
    </svg>
  );
};
export default Waze;

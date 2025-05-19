import React from "react";
const FlipRight: React.FC<
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
        strokeWidth={1.5}
        d="M15 3h1m3 0a3 3 0 0 1 3 3v0m-7 15h1m3 0a3 3 0 0 0 3-3v0m0-8v4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6a3 3 0 0 1 3-3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3z"
      />
    </svg>
  );
};
export default FlipRight;

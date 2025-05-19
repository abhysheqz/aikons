import React from "react";
const ScissorRectangle: React.FC<
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
        d="M21 3H3v18h18z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 9.5 11 12m0 0-4 4m4-4 2.5 2.5M11 12 7 8m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default ScissorRectangle;

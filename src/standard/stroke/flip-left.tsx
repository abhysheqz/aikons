import React from "react";
const FlipLeft: React.FC<
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
        d="M12 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6a1 1 0 0 1-1-1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3H8M5 3a3 3 0 0 0-3 3v0m7 15H8m-3 0a3 3 0 0 1-3-3v0m0-8v4"
      />
    </svg>
  );
};
export default FlipLeft;

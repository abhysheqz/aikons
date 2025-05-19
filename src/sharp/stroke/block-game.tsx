import React from "react";
const BlockGame: React.FC<
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
        d="M10 2H2v8h8zM22 6h-8v8h8zM22 14h-8v8h8zM14 14H6v8h8z"
      />
    </svg>
  );
};
export default BlockGame;

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
        fill="currentColor"
        d="M9.75 1.75h-8v8h8zM22.25 4.75h-8v8h8zM22.25 14.25h-8v8h8zM12.75 14.25h-8v8h8z"
      />
    </svg>
  );
};
export default BlockGame;

import React from "react";
const Command: React.FC<
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
        d="M15 9v6H9V9zM15 15h3a3 3 0 1 1-3 3zM9 15.002H6a3 3 0 1 0 3 3zM15 9V6a3 3 0 1 1 3 3zM9 9V6a3 3 0 1 0-3 3z"
      />
    </svg>
  );
};
export default Command;

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
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8h8v8H8zm2 2v4h4v-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 14h4a4 4 0 1 1-4 4zm2 2v2a2 2 0 1 0 2-2zM6 16.002a2 2 0 1 0 2 2v-2zm-4 2a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0M14 6a4 4 0 1 1 4 4h-4zm4-2a2 2 0 0 0-2 2v2h2a2 2 0 1 0 0-4M2 6a4 4 0 1 1 8 0v4H6a4 4 0 0 1-4-4m4-2a2 2 0 1 0 0 4h2V6a2 2 0 0 0-2-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Command;

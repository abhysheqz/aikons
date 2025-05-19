import React from "react";
const Pan_02: React.FC<
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
        strokeWidth={1.5}
        d="M21 13H9v1a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 13-2.5-2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.368 6.368c.49-.49 1.286-.49 1.777 0l2.487 2.487a1.256 1.256 0 1 1-1.777 1.777L2.368 8.145a1.256 1.256 0 0 1 0-1.777Z"
      />
    </svg>
  );
};
export default Pan_02;

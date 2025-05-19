import React from "react";
const SortByDown_01: React.FC<
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
        d="M10 3H3v7h7zM10 14H3v7h7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.006 16.025 3 2.987L21 16m-6.99-9.484 3.953 3.456a.1.1 0 0 1 .034.075v8.508"
      />
    </svg>
  );
};
export default SortByDown_01;

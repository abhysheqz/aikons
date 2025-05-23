import React from "react";
const Sorting_02: React.FC<
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
        d="M11.5 12h7M11.5 8h4M11.5 4h2M11.5 16h9M3.5 18.5 6 21l2.5-2.5M6 4v16.391"
      />
    </svg>
  );
};
export default Sorting_02;

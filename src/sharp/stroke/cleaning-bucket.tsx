import React from "react";
const CleaningBucket: React.FC<
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
        d="M11 8v10H3V8z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 9h10l-1 13H8l-.308-4M19 9c0-3.866-2.25-7-5.025-7C11.443 2 9.348 4.608 9 8M3 14h8M11 13h9"
      />
    </svg>
  );
};
export default CleaningBucket;

import React from "react";
const Towels: React.FC<
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
        d="M6.5 5H17a2 2 0 0 1 2 2v8a1 1 0 0 1-1 1h-1M6.5 5A1.5 1.5 0 0 0 5 6.5V8h3M6.5 5A1.5 1.5 0 0 1 8 6.5V8m-3 3v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3M8 8v7a1 1 0 0 0 1 1h8M22 4v2a2 2 0 0 1-2 2h-1M2 4v2a2 2 0 0 0 2 2h1"
      />
    </svg>
  );
};
export default Towels;

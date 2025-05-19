import React from "react";
const GitCompare: React.FC<
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
        d="M3 5.023a2 2 0 1 1 4 0 2 2 0 0 1-4 0M21 19.023a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 17.023v-10a2 2 0 0 0-2-2h-6m1.5-2.5-2.5 2.5 2.5 2.5M4.999 7.023v10a2 2 0 0 0 2 2h6m-1.5 2.5 2.5-2.5-2.5-2.5"
      />
    </svg>
  );
};
export default GitCompare;

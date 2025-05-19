import React from "react";
const FlipHorizontal: React.FC<
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
        d="M2 15.057a1 1 0 0 0 1.581.813l4.28-3.056a1 1 0 0 0 0-1.628L3.58 8.13A1 1 0 0 0 2 8.943zM22 15.057a1 1 0 0 1-1.581.813l-4.28-3.056a1 1 0 0 1 0-1.628l4.28-3.057A1 1 0 0 1 22 8.943z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.002 14v-4m0-3.5V3m0 18v-3.5"
      />
    </svg>
  );
};
export default FlipHorizontal;

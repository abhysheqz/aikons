import React from "react";
const SemiTruck: React.FC<
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
        d="M19 13.5h-2a1 1 0 0 1-1-1v-4m3 5v-5m0 5h1a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-1.5M16 8.5h-3m3 0h3m-6 0v10h2.5M13 8.5v-3h4a2 2 0 0 1 2 2v1M13 5.5v-1a1 1 0 0 0-1-1h-1M4 18.5H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10v5H8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default SemiTruck;

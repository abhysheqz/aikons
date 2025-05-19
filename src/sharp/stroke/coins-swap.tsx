import React from "react";
const CoinsSwap: React.FC<
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
        d="M10 7.027a6.044 6.044 0 0 1 12 1.016A6.044 6.044 0 0 1 16.973 14M8 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 8c0-2.764 2.236-5 5-5v2M22 16c0 2.764-2.236 5-5 5v-2"
      />
    </svg>
  );
};
export default CoinsSwap;

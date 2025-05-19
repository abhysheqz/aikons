import React from "react";
const Estimate_01: React.FC<
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
        d="M18 8.756V2H3v16h9.706"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6h9M6 10h1M10 10h1M14 10h1M6 14h1M10 14h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 14h-3m-3 6h3m0-6h-3v3h6v3h-3m0-6v-2m0 8v2"
      />
    </svg>
  );
};
export default Estimate_01;

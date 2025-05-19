import React from "react";
const PropertyDelete: React.FC<
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
        strokeWidth={1.5}
        d="M20.998 12.5s.002-.47.002-1c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21c.53 0 1-.002 1-.002"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 16h1.5M6 16h1m3-4h6M6 12h1M16 16l3 3m0 0 3 3m-3-3-3 3m3-3 3-3"
      />
    </svg>
  );
};
export default PropertyDelete;

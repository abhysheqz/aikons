import React from "react";
const VintageClock: React.FC<
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
        d="M15.959 9.982a3.99 3.99 0 0 1-3.986 3.991 3.99 3.99 0 0 1-3.987-3.99 3.99 3.99 0 0 1 3.987-3.992 3.99 3.99 0 0 1 3.986 3.991Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.949 5.991v11.973M4.997 5.991v11.973"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.004 10 1-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.973 13.973v3.99m-1.994 0h3.987"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.996 6.002c1.08 0 2.845.05 2.972-1.937.007-.05.05-.061.101-.061h2.477c.445-.783 1.196-1.746 3.196-2A2 2 0 0 1 12.258 2c1.877.226 2.71 1.172 3.176 1.998h2.483c.051 0 .052.051.059.102.288 2.173 1.951 1.897 3.007 1.897M2.98 17.95c1.08 0 2.844-.049 2.971 1.937.007.05.05.061.102.061H8.53c.444.783 1.195 1.746 3.196 2 .17.022.345.023.515.003 1.878-.226 2.71-1.172 3.176-1.998h2.484c.05 0 .052-.051.058-.101.289-2.174 1.951-1.898 3.007-1.898"
      />
    </svg>
  );
};
export default VintageClock;

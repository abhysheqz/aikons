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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 18h1a2 2 0 0 1 1.756 1.041C6.02 19.526 6.448 20 7 20h.882c.379 0 .72.223.982.496C9.64 21.306 11.167 22 12 22s2.36-.694 3.136-1.504c.262-.273.603-.496.982-.496H17c.552 0 .98-.474 1.244-.959A2 2 0 0 1 20 18h1M3 6h1a2 2 0 0 0 1.756-1.041c.265-.485.692-.96 1.244-.96h.882c.379 0 .72-.222.982-.495C9.64 2.694 11.167 2 12 2s2.36.694 3.136 1.504c.262.273.603.496.982.496H17c.552 0 .98.474 1.244.959A2 2 0 0 0 20 5.999h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0M19 6v12M5 6v12M12.004 10l1-1M11.974 14v3.991M10.5 18h3"
      />
    </svg>
  );
};
export default VintageClock;

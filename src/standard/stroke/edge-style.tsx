import React from "react";
const EdgeStyle: React.FC<
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
        d="M3 6h18M3 10h7.5m3 0H21M3 14h4m3 0h4m3 0h4M3 18h2m3.5 0h2m3 0h2m3.5 0h2"
      />
    </svg>
  );
};
export default EdgeStyle;

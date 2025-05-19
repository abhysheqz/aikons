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
        d="M3 6h18M3 10h7.5M13.5 10H21M3 14h4M10 14h4M17 14h4M3 18h2.118m3.176 0h2.118m3.176 0h2.118m3.176 0H21"
      />
    </svg>
  );
};
export default EdgeStyle;

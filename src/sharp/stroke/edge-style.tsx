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
        strokeWidth={1.5}
        d="M3 6h18M3 10h8M13 10h8M3 14h5M10 14h4M16 14h5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 18H21m-8.5 0H16m-8.5 0H11m-8 0h3"
      />
    </svg>
  );
};
export default EdgeStyle;

import React from "react";
const Wikipedia: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 8h1.55m0 0H8M6.05 8l3.45 9 4.25-9H15M9 8h1.25l4.25 9 3.45-9m0 0H16m1.95 0h1.55"
      />
    </svg>
  );
};
export default Wikipedia;

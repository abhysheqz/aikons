import React from "react";
const Prison: React.FC<
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
        d="M3.75 3v18m5.5-18v18m5.5-6v6m0-18v6m5.5-6v18M2 3h20M20 9h-7v6h7M2 21h20M17.5 12h-2"
      />
    </svg>
  );
};
export default Prison;

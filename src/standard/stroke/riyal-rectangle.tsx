import React from "react";
const RiyalRectangle: React.FC<
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
        d="M18 11v1a3 3 0 0 1-3 3M11 8v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1M8.5 8v4.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1M11 15.49v.01M13 15.5v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 2.5h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2"
      />
    </svg>
  );
};
export default RiyalRectangle;

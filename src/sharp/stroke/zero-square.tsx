import React from "react";
const ZeroSquare: React.FC<
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
        d="M15 14v-4a3 3 0 1 0-6 0v4a3 3 0 1 0 6 0Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2.5 21.5h19v-19h-19z" />
    </svg>
  );
};
export default ZeroSquare;

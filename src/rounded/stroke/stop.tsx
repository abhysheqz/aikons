import React from "react";
const Stop: React.FC<
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
        d="M4 12c0-3.28 0-4.919.814-6.081a4.5 4.5 0 0 1 1.105-1.105C7.08 4 8.72 4 12 4s4.919 0 6.081.814a4.5 4.5 0 0 1 1.105 1.105C20 7.08 20 8.72 20 12s0 4.919-.814 6.081a4.5 4.5 0 0 1-1.105 1.105C16.92 20 15.28 20 12 20s-4.919 0-6.081-.814a4.5 4.5 0 0 1-1.105-1.105C4 16.92 4 15.28 4 12Z"
      />
    </svg>
  );
};
export default Stop;

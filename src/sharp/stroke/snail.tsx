import React from "react";
const Snail: React.FC<
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
        d="M9.61 14c0 2.5 1.918 6 5.947 6s6.442-3.134 6.442-7c0-4.97-4.218-9-9.91-9C6.457 4 1.413 8.869 2.053 16c2.692.682 6.171-.136 7.556-2Zm0 0c0-5.128 7.93-6.209 7.93-1 0 1.469-1.026 2.726-2.478 3.246"
      />
    </svg>
  );
};
export default Snail;

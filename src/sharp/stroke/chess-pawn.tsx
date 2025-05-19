import React from "react";
const ChessPawn: React.FC<
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
        d="M9.5 10c0 2.667-.5 5.333-2.5 8m7.5-8c0 2.667.5 5.333 2.5 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2a3.5 3.5 0 0 0-2.45 6h4.9A3.5 3.5 0 0 0 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10h8M20 22H4l1.5-4h13z"
      />
    </svg>
  );
};
export default ChessPawn;

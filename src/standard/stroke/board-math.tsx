import React from "react";
const BoardMath: React.FC<
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
      <rect
        width={18}
        height={14}
        x={3}
        y={3}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 21 2-4M19 21l-2-4M13 10h-2M8 12.5V8L6.5 9M17 12.5V8l-1.5 1M12 20v-3"
      />
    </svg>
  );
};
export default BoardMath;

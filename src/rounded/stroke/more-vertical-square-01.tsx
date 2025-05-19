import React from "react";
const MoreVerticalSquare_01: React.FC<
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
        width={3}
        height={3}
        x={10.5}
        y={3}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1}
      />
      <rect
        width={3}
        height={3}
        x={10.5}
        y={10.5}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1}
      />
      <rect
        width={3}
        height={3}
        x={10.5}
        y={18}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1}
      />
    </svg>
  );
};
export default MoreVerticalSquare_01;

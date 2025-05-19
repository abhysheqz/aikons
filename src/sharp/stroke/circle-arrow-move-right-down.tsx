import React from "react";
const CircleArrowMoveRightDown: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.504 7 17 9.5 14.504 12M7 14.5 9.5 17l2.5-2.5m4.707-5H9.504L9.5 16.565"
      />
    </svg>
  );
};
export default CircleArrowMoveRightDown;

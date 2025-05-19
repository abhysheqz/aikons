import React from "react";
const Coffee_01: React.FC<
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
        d="m5 7 1.76 10.405c.306 1.808.46 2.713 1 3.337 1.454 1.677 7.026 1.677 8.48 0 .54-.624.694-1.529 1-3.337L19 7M5 7l.743-1.712c.609-1.404.913-2.106 1.548-2.502 1.59-.993 7.654-1.102 9.418 0 .635.396.94 1.098 1.548 2.502L19 7M4 7h16"
      />
      <ellipse
        cx={12}
        cy={14.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        rx={2}
        ry={2.5}
      />
    </svg>
  );
};
export default Coffee_01;

import React from "react";
const PaintBrush_01: React.FC<
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
        d="m5.996 15 2.997 3m-.5-5.5 2.997 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.988 17.999 17.981 3.005a.01.01 0 0 1 .014 0l2.988 2.99a.01.01 0 0 1 0 .015L5.99 20.998H2.988z"
      />
    </svg>
  );
};
export default PaintBrush_01;

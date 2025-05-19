import React from "react";
const PaintBrush_03: React.FC<
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
        d="M11.994 18.023 8.996 22.03l-2.499-2.503m0 0-1.999-2.003m2 2.003 1.498-1.503m-1.999-6.008L2 15.019l2.498 2.504m0 0 1.5-1.503"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.994 8.966 6.964-6.938a.01.01 0 0 1 .014 0l3.026 2.956a.01.01 0 0 1 0 .014l-7.017 7.027.066 4.947-.003.008-2.058 2.04-7.978-8.03 2.007-2.022.007-.002z"
      />
    </svg>
  );
};
export default PaintBrush_03;

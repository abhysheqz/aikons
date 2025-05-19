import React from "react";
const LassoTool_02: React.FC<
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
        d="M9.987 17c0 1.105-1.116 2-2.493 2C6.116 19 5 18.105 5 17s1.116-2 2.494-2c1.377 0 2.493.895 2.493 2m0 0c.062.772.02 3.5-2.984 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 15.5 2 2l11.5 4L22 2l-1 13-11 3"
      />
    </svg>
  );
};
export default LassoTool_02;

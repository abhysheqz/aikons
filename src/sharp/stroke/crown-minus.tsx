import React from "react";
const CrownMinus: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 3h-5M5 21h14M19 18H5L2 8l5.5 3L12 4l4.5 7L22 8z"
      />
    </svg>
  );
};
export default CrownMinus;

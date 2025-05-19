import React from "react";
const HorizontalResize: React.FC<
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
        d="M10 20V4M14 20V4M2 12l5-3-1 3 1 3zM22 12l-5-3 1 3-1 3zM10 12H6M18 12h-4"
      />
    </svg>
  );
};
export default HorizontalResize;

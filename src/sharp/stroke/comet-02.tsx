import React from "react";
const Comet_02: React.FC<
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
        strokeWidth={1.5}
        d="m15 2-1.5 1.5M9 8l3-3M21.414 10.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 18 1.5-5.5L7 11l3 3.5 2.5-2L15 17l-1 2.5L7.5 22z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m22 2-8 8" />
    </svg>
  );
};
export default Comet_02;

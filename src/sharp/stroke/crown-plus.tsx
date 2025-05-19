import React from "react";
const CrownPlus: React.FC<
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
        d="M18.5 2v5M21 4.5h-5M5 22h14M19 19H5L2 9l5.5 3L12 5l4.5 7L22 9z"
      />
    </svg>
  );
};
export default CrownPlus;

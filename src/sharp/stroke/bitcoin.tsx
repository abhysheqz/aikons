import React from "react";
const Bitcoin: React.FC<
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
        d="M5.5 4h9.4c1.988 0 3.6 1.79 3.6 4s-1.612 4-3.6 4m0 0c1.988 0 3.6 1.79 3.6 4s-1.612 4-3.6 4H5.5m9.4-8H7.7M7.5 4v16M9.5 2v2m5-2v2M9.5 20v2m5-2v2"
      />
    </svg>
  );
};
export default Bitcoin;

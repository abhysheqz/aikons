import React from "react";
const Pipeline: React.FC<
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
        d="M20.3 3a1 1 0 0 1 .875 1.486l-8.3 14.94a1 1 0 0 1-1.75 0l-8.3-14.94A1 1 0 0 1 3.7 3zM19 9H5m11.182 5H8"
      />
    </svg>
  );
};
export default Pipeline;

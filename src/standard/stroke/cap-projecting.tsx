import React from "react";
const CapProjecting: React.FC<
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
        d="M21 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M13 12h8"
      />
    </svg>
  );
};
export default CapProjecting;

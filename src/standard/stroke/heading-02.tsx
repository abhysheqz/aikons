import React from "react";
const Heading_02: React.FC<
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
        d="M20 19h-4c0-.595.152-1.152.586-1.586l2.793-2.793C19.818 14.182 20 13.61 20 13a2 2 0 1 0-4 0M4 12h9m-9 7V5m9 14V5"
      />
    </svg>
  );
};
export default Heading_02;

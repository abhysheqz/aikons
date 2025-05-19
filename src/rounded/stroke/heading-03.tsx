import React from "react";
const Heading_03: React.FC<
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
        d="M3.5 5v14M13.5 5v14M16.5 17a2 2 0 1 0 2-2 2 2 0 1 0-2-2M3.5 12h10"
      />
    </svg>
  );
};
export default Heading_03;

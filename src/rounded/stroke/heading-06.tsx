import React from "react";
const Heading_06: React.FC<
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
        d="M3.5 5v14M13.5 5v14M16.5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0v-4a2 2 0 1 1 4 0M3.5 12h10"
      />
    </svg>
  );
};
export default Heading_06;

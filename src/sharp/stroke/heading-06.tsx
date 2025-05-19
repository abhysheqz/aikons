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
        strokeWidth={1.5}
        d="M3 5v14M13 5v14M16 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0v-4a2 2 0 1 1 4 0M3 12h10"
      />
    </svg>
  );
};
export default Heading_06;

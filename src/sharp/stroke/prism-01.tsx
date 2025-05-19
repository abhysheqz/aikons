import React from "react";
const Prism_01: React.FC<
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
        d="M15 8.4 12 3 2 21h20l-3.611-6.5M8 10l14-3M8 10l13.462 1.5M8 10l14 6M8 10l-6 1"
      />
    </svg>
  );
};
export default Prism_01;

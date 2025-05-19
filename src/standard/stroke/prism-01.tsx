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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 8.4-2.126-3.827a1 1 0 0 0-1.748 0l-8.3 14.941A1 1 0 0 0 3.7 21h16.6a1 1 0 0 0 .875-1.486L18.389 14.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 7 8 10l14 6m-.5-4.5L9.581 10.176M8 10l-6 1"
      />
    </svg>
  );
};
export default Prism_01;

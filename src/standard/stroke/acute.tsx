import React from "react";
const Acute: React.FC<
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
        d="M14 2 3 20h18M14 2l-3 .5m3-.5 1 2.5M21 20l-2-2m2 2-2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 12.503c2.838.48 5 2.475 5 5.479a6.1 6.1 0 0 1-.341 2.02"
      />
    </svg>
  );
};
export default Acute;

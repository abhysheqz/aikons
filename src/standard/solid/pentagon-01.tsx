import React from "react";
const Pentagon_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M10.28 2.413a2.75 2.75 0 0 1 3.437 0l7.748 6.2a2.75 2.75 0 0 1 .95 2.814l-2.31 9.24a2.75 2.75 0 0 1-2.668 2.082H6.56a2.75 2.75 0 0 1-2.668-2.083l-2.31-9.24a2.75 2.75 0 0 1 .95-2.814z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pentagon_01;

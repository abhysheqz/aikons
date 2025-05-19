import React from "react";
const ServerStack_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 4H2v6h20zM22 14H2v6h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M6 17h.01M10 17h.01M6 7h.01M10 7h.01"
      />
    </svg>
  );
};
export default ServerStack_01;

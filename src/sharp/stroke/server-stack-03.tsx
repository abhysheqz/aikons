import React from "react";
const ServerStack_03: React.FC<
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
        d="M21 3H3v6h18zM21 9H3v6h18zM21 15H3v6h18zM6 6h.01M6 12h.01M6 18h.01M9 6h.01M9 12h.01M9 18h.01"
      />
    </svg>
  );
};
export default ServerStack_03;

import React from "react";
const ServerStack_02: React.FC<
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
        d="M21 3H3v5h18zM21 11H3v5h18zM12 19v2m-7 0h14M6 13.5h.01M6 5.5h.01M9 13.5h.01M9 5.5h.01"
      />
    </svg>
  );
};
export default ServerStack_02;

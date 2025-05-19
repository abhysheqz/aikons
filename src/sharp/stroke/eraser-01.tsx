import React from "react";
const Eraser_01: React.FC<
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
        d="m13.012 9.003-6 6m6 0-6-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 4.1a.1.1 0 0 1 .1-.1h14.96l4.778 7.737a.5.5 0 0 1 0 .526L17.06 20H2.1a.1.1 0 0 1-.1-.1z"
      />
    </svg>
  );
};
export default Eraser_01;

import React from "react";
const Bathtub_01: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m6 19-1 2m13-2 1 2" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 11v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 11h20M4 11V5.523a2.523 2.523 0 0 1 4.943-.715L9 5M8 6l2.5-2"
      />
    </svg>
  );
};
export default Bathtub_01;

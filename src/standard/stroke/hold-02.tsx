import React from "react";
const Hold_02: React.FC<
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
        d="M11.001 6.566a1.5 1.5 0 0 0-3 0v.5m3-.5v2m0-2v-1a1.5 1.5 0 1 1 3 0v1m4 13.5v-1.5l1.124-1.404A4 4 0 0 0 20 14.663V8.066a1.5 1.5 0 0 0-3 0m-9 12v-1.5L4.615 13.91a3.21 3.21 0 0 1 .482-4.302l2.906-2.542m0 4.5v-4.5m6-.5v3m0-3a1.5 1.5 0 0 1 3 0v1.5m0 0v2.5"
      />
    </svg>
  );
};
export default Hold_02;

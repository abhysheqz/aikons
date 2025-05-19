import React from "react";
const WebProgramming: React.FC<
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
        d="M3 3v18h18V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 6h.009M11 6h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.616 13.508c-.333-.367-1.112-.797-2.026-.196-.511.337-.635.929-.583 1.723-.047.473 0 1.462.837 1.812 1.006.42 1.478 0 2.254-.89m1.89-3.207v1.508m0 1.498v1.497M15.006 13l2.007 3.998"
      />
    </svg>
  );
};
export default WebProgramming;

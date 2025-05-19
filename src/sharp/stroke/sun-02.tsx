import React from "react";
const Sun_02: React.FC<
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
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM12 2c-.377.333-.905 1.7 0 2.5m0 15c.377.333.906 1.7 0 2.5M19.072 4.929c-.502-.031-1.842.562-1.767 1.768M6.698 17.303c.031.503-.562 1.842-1.768 1.768M22 12c-.333-.377-1.7-.905-2.5 0m-15 0c-.333.377-1.7.906-2.5 0M19.07 19.071c.031-.502-.561-1.842-1.768-1.767M6.696 6.697c-.503.031-1.842-.562-1.768-1.768"
      />
    </svg>
  );
};
export default Sun_02;

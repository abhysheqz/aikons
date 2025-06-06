import React from "react";
const Sun_03: React.FC<
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
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0M11.998 2v2m0 16v2m7-16.999L17.5 6.5M6.5 17.5 5 19m17-7h-2M4 12H2m17 7.001-1.5-1.5M6.499 6.5 5 5.001"
      />
    </svg>
  );
};
export default Sun_03;

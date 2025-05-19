import React from "react";
const CurvyLeftDirection: React.FC<
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
        d="M22 11h-4a2 2 0 0 0-2 2v4a2 2 0 1 1-4 0V6.996a1.996 1.996 0 1 0-3.992.008l.017 3.988a2 2 0 0 1-2 2.008H3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m5 16-3-3 3-3" />
    </svg>
  );
};
export default CurvyLeftDirection;

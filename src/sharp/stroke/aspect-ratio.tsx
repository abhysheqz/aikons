import React from "react";
const AspectRatio: React.FC<
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
        d="M22 3H2v18h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 9h14v12M10 21V9" />
    </svg>
  );
};
export default AspectRatio;

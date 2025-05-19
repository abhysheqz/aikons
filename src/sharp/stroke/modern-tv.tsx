import React from "react";
const ModernTv: React.FC<
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
        d="M22 2.5H2v16h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 21.5h8" />
    </svg>
  );
};
export default ModernTv;

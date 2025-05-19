import React from "react";
const ArrowRight_04: React.FC<
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
        d="M15 12H4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m20 12-5 4V8z" />
    </svg>
  );
};
export default ArrowRight_04;

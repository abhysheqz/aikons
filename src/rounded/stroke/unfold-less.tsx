import React from "react";
const UnfoldLess: React.FC<
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
        d="M18 19s-4.419-5-6-5-6 5-6 5M18 5s-4.419 5-6 5-6-5-6-5"
      />
    </svg>
  );
};
export default UnfoldLess;

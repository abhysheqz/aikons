import React from "react";
const ArrowRight_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M8.713 5.307a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1 0 1.06l-6 6A.75.75 0 0 1 8.25 18V6a.75.75 0 0 1 .463-.693"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowRight_01;

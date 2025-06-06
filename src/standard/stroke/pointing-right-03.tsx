import React from "react";
const PointingRight_03: React.FC<
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
        d="M21.5 5 19 2.5M21.5 5 19 7.5M21.5 5h-6M11.829 8.371 10 10.505h9.75a1.75 1.75 0 1 1 0 3.5H13.5V18.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-6.93a2 2 0 0 1 .89-1.664L9.412 5.89a1.74 1.74 0 0 1 2.417 2.482"
      />
    </svg>
  );
};
export default PointingRight_03;

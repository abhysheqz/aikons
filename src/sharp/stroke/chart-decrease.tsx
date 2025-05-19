import React from "react";
const ChartDecrease: React.FC<
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
        d="M20.985 21H2.998V3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.007 5.974c2.162 0 10.696.383 10.997 10.471m-3.51-1.481L18.011 17l2.99-3.543"
      />
    </svg>
  );
};
export default ChartDecrease;

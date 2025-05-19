import React from "react";
const Legal_01: React.FC<
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
        d="m8 10-6 6 2 2 6-6M12.5 22l1.5-3h4l1.5 3M11 22h10M20 11.636 22 10m-2 4.91L22 16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.836 2.004-1.04 1.052m0 0c1.372 1.068 4.295 3.654 4.513 3.914.259.219 2.547 2.853 3.611 4.228M8.796 3.056 5.054 6.79m0 0L3.997 7.844M5.054 6.79c.577.705 1.447 1.768 2.22 2.675a29 29 0 0 0 3.228 3.236c.907.776 1.97 1.651 2.675 2.23m4.798-4.77-1.055 1.037m0 0-3.743 3.733m0 0-1.057 1.054"
      />
    </svg>
  );
};
export default Legal_01;

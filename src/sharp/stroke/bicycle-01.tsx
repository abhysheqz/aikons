import React from "react";
const Bicycle_01: React.FC<
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
        d="M6 19.991a3.999 3.999 0 1 0-4-3.998 4 4 0 0 0 4 3.998ZM18 19.991a3.999 3.999 0 1 0-4-3.998 4 4 0 0 0 4 3.998Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 15.994h5l5-7.996M12.5 13.495 7 7m0 0H5m2 0h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.998 15.993 15.005 4a.01.01 0 0 1 .01-.013c1.694.09 4.31-.096 4.98 2.228"
      />
    </svg>
  );
};
export default Bicycle_01;

import React from "react";
const Crab: React.FC<
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
        d="M17 3c2.287 0 6.096 0 4.7 4.97m0 0c-1.333.167-3.176.53-3.684-1.97m3.685 1.97.091.73a3.97 3.97 0 0 1-1.595 3.69L18.016 14M7 3C4.713 3 .904 3 2.3 7.97m0 0c1.333.167 3.176.53 3.684-1.97M2.299 7.97l-.091.73a3.97 3.97 0 0 0 1.595 3.69L5.984 14M12 21c1.778-1.085 6-3.529 6-5.81 0-3.44-2.686-5.19-6-5.19s-6 1.75-6 5.19c0 2.281 4.222 4.725 6 5.81Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19c-1.455 0-3.91 0-5 2m11-2c1.454 0 3.91 0 5 2M6 16.5c-1 0-3-.5-4-2m16 2c1 0 3-.5 4-2M14 10l1-2m-5 2L9 8"
      />
    </svg>
  );
};
export default Crab;

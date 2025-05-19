import React from "react";
const Magnet: React.FC<
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
        strokeWidth={1.5}
        d="M3.925 2.5H9.15s-.95 5.2-.95 7.6c0 3 1.9 5.4 3.8 5.4s3.8-2.4 3.8-5.4c0-2.4-.95-7.6-.95-7.6h5.225s1.425 4.638 1.425 9c0 5.5-3.8 10-9.5 10s-9.5-4.5-9.5-10c0-4.362 1.425-9 1.425-9Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.973 7.25h5.225m7.6 0h5.225"
      />
    </svg>
  );
};
export default Magnet;

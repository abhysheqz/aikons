import React from "react";
const DimSum_01: React.FC<
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
        d="M13.5 8.5 22 3M8 17l14-8M15.553 12.698a7.7 7.7 0 0 0-1.032-1.795c-1.94-2.328-2.5-4.1-2.504-4.903C11.958 7.607 10 8.477 9.012 7c-.987 1.477-2.946.607-3.005-1-.004.802-.563 2.575-2.504 4.903C2.562 12.13 2 13.598 2 15c0 3.314 3.14 6 7.012 6 3.676 0 6.691-2.42 6.988-5.5M7.5 10.5l-1 1.5m4-1.5 1 1.5"
      />
    </svg>
  );
};
export default DimSum_01;

import React from "react";
const DimSum_02: React.FC<
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
        d="m7.5 11.5-.5 1m3.5-1 .5 1M16.5 6.5l.5 1M9 22c3.866 0 7-2.686 7-6 0-1.402-.56-2.87-1.5-4.097C12.562 9.575 12.004 7.803 12 7c-.059 1.607-2.015 2.477-3 1-.985 1.477-2.941.607-3-1-.003.802-.562 2.575-2.5 4.903C2.56 13.13 2 14.598 2 16c0 3.314 3.134 6 7 6M11 5.016C11.834 3.623 12.11 2.57 12.112 2c.059 1.616 1.993 2.49 2.967 1.005.973 1.486 2.908.611 2.966-1.005.003.807.556 2.589 2.472 4.93C21.446 8.163 22 9.64 22 11.048c0 2.05-1.173 3.86-2.966 4.951"
      />
    </svg>
  );
};
export default DimSum_02;

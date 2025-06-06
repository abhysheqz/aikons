import React from "react";
const ElectricHome_01: React.FC<
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
        d="M20 8.5v11a2 2 0 0 1-2 2h-2.5M4 8.5v11a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1V18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 10-8.8-6.6a2 2 0 0 0-2.4 0L2 10M10 12H8.5v2.697a1 1 0 0 0 .168.555l1.535 2.303a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l1.535-2.303a1 1 0 0 0 .168-.555V12H14m-4 0v-2m0 2h4m0 0v-2"
      />
    </svg>
  );
};
export default ElectricHome_01;

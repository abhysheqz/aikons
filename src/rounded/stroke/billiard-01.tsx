import React from "react";
const Billiard_01: React.FC<
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
        strokeWidth={1.5}
        d="M8.07 10a7 7 0 1 1 6.05 5.945"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.868 10c.335-1.31.025-2.982-.868-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 19.097 8.225-7.54M4.903 22l7.702-8.401m0 0c0-1.277-.928-2.245-2.38-2.042m2.38 2.042 2.02-2.204a1.43 1.43 0 0 0-2.02-2.02l-2.38 2.182"
      />
    </svg>
  );
};
export default Billiard_01;

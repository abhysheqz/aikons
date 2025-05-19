import React from "react";
const PoundCircle: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.05 10.244c0-1.882-1.598-3.033-3.236-2.634-2.038.591-2.089 2.88-1.685 3.803.619 1.287 1.548 1.514 2.158 1.577-1.352-.199-.89 2.084-3.29 3.474-.009.005-.006.02.005.02h5.545c.574 0 1.279-.378 1.455-.56m-7.49-2.934h5.02"
      />
    </svg>
  );
};
export default PoundCircle;

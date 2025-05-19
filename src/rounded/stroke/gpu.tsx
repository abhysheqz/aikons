import React from "react";
const Gpu: React.FC<
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
        d="M4 21V5c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C2.696 3 2.464 3 2 3M4 5h13c2.357 0 3.535 0 4.268.732S22 7.643 22 10v4.5c0 2.357 0 3.535-.732 4.268-.733.732-1.911.732-4.268.732h-4.882a1.81 1.81 0 0 1-1.618-1c-.306-.613-.933-1-1.618-1H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M7.5 8.5h2m-2 3h2m-2 3h2"
      />
    </svg>
  );
};
export default Gpu;

import React from "react";
const CarSignal: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 22v-3H5v3H2v-6.5l2-3 2.5-5h10l2.5 5 2 3V22z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m2 11 2 1.5 2 .5h11l2-.5 2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M17 16v.01M6 16v.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 7a2 2 0 0 0-2-2M22 7a5 5 0 0 0-5-5"
      />
    </svg>
  );
};
export default CarSignal;

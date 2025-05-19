import React from "react";
const PathfinderMinusFront: React.FC<
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
        d="M21.964 14.015v3.004m-4.99 5.006h-2.995m7.985-10.012V9.009h-3.992m3.992 10.013v3.003H18.97m-6.987 0H8.988V18.02"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.904 2.035.06 6.894-5.951.051.052 6.066-6.982.06a.01.01 0 0 1-.01-.01L1.961 2.033a.01.01 0 0 1 .01-.01l12.923.003a.01.01 0 0 1 .01.01Z"
      />
    </svg>
  );
};
export default PathfinderMinusFront;

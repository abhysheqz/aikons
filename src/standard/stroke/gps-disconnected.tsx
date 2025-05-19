import React from "react";
const GpsDisconnected: React.FC<
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
        d="m22 8-3-3m0 0-3-3m3 3-3 3m3-3 3-3M9 10.03A3.515 3.515 0 1 1 13.97 15M2 12.37A9.63 9.63 0 0 0 11.63 22c2.06 0 3.97-.647 5.535-1.748.472-.332.49-1.004.082-1.412L5.16 6.753c-.408-.408-1.08-.39-1.412.082A9.6 9.6 0 0 0 2 12.37"
      />
    </svg>
  );
};
export default GpsDisconnected;

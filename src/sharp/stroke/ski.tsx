import React from "react";
const Ski: React.FC<
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
        d="M20.498 4.5a1.5 1.5 0 1 1-2.999 0 1.5 1.5 0 0 1 3 0ZM12.979 7.82l1.639-1.972 2.71 1.971m-4.35 0L15.8 9.7l1.529-1.88m-4.35 0L6.5 3.5m6.758 8.998-2.767-1.86.726-.938m2.04 2.798 3.04 2.019-2.791 3.796m-.248-5.815.725-.997m3.346-3.682L18 11.167l3.5 2.333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m3.5 12 14 9 2.5-.5"
      />
    </svg>
  );
};
export default Ski;

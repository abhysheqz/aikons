import React from "react";
const GpsOff_01: React.FC<
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
        d="M22 12h-2M4 12H2M12 2v2M12 20v2M2 2l20 20M8.161 4.98a8 8 0 0 1 10.86 10.86m-1.354 1.806A8 8 0 1 1 6.353 6.333"
      />
    </svg>
  );
};
export default GpsOff_01;

import React from "react";
const Bus_03: React.FC<
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
        d="M6 10V5m5 5V5m5 5V5.5M5.012 17h-3.01l.002-12h13.998a6 6 0 0 1 6 6v6H19m-4 0H9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 10h14l1.997 1.997.007.003H21.5"
      />
    </svg>
  );
};
export default Bus_03;

import React from "react";
const CheckUnread_02: React.FC<
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
        d="M2.5 13.5s2.048.767 3.5 3.5c0 0 .285-.48.821-1.247M16.5 5.5s-2.475 1.506-4.497 4.003M7.5 13s2.207 1.364 3.5 4c0 0 .615-1.028 1.764-2.559M21.5 6s-3.942 2.096-6.87 6.13M3.5 5l14 14"
      />
    </svg>
  );
};
export default CheckUnread_02;

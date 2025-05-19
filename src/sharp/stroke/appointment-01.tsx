import React from "react";
const Appointment_01: React.FC<
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
        d="M16.5 2v4m-9-4v4M21 12.5V4H3v18h7M3 10h18M13 19.5l2.5 2.5 5.5-6"
      />
    </svg>
  );
};
export default Appointment_01;

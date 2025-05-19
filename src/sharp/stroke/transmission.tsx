import React from "react";
const Transmission: React.FC<
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
        d="M5.6 22A1.6 1.6 0 0 0 4 20.4M8.8 22A4.8 4.8 0 0 0 4 17.2m8 4.8a8 8 0 0 0-8-8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 22h5V2H5v9"
      />
    </svg>
  );
};
export default Transmission;

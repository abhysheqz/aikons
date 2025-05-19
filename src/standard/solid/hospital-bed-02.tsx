import React from "react";
const HospitalBed_02: React.FC<
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
        fill="currentColor"
        d="M1 6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v.5a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 4.5V6H3V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 9 4v2H7V4.5zM6.938 16.174l11-7.5 1.126 1.652-11 7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.938 17.826-11-7.5 1.126-1.652 11 7.5zM6 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HospitalBed_02;

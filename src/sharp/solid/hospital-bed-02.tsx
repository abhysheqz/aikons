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
        d="M1.25 6A.75.75 0 0 1 2 5.25h20a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V6H7V4.5H5V6H3zM6.953 16.163l11.5-7.902 1.093 1.675-11.5 7.902z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.954 17.838-11.5-7.902 1.092-1.675 11.5 7.902zM6 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
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

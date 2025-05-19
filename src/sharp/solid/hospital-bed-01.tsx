import React from "react";
const HospitalBed_01: React.FC<
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
        fillRule="evenodd"
        d="M5 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M19 17.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 6A.75.75 0 0 1 2 5.25h20a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.962 10.469 1.253-1.588 1.57 1.238-1.252 1.588c-.5.633-.658 1.46-.432 2.226l.675 2.283-1.918.568-.675-2.283V14.5H6.817l-.675 2.284-1.918-.568.675-2.283a2.46 2.46 0 0 0-.432-2.226l.785-.619-.785.62-1.252-1.589 1.57-1.238 1.253 1.588c.473.6.778 1.3.9 2.031h10.124c.122-.731.427-1.43.9-2.031l.735.58zM3 3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V6H7V4.5H5V6H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HospitalBed_01;

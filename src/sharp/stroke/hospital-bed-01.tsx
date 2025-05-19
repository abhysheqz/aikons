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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 6H2v3.5h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 13.5h12M4 9.5l1.252 1.588c.7.887.925 2.05.606 3.129L5.183 16.5M20 9.5l-1.252 1.588c-.7.887-.925 2.05-.606 3.129l.675 2.283"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6V3.5h4V6"
      />
    </svg>
  );
};
export default HospitalBed_01;

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
        d="M22 6H2v.5a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M6 13.5h12" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 9.5 1.23 1.668a3.9 3.9 0 0 1 .436 3.901L5.033 16.5M20 9.5l-1.23 1.668a3.9 3.9 0 0 0-.436 3.901l.633 1.431"
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
        d="M4 6V4a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 8 4v2"
      />
    </svg>
  );
};
export default HospitalBed_01;

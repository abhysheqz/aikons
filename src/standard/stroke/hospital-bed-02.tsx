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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 6H2v.5a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM4 6V4a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 8 4v2M7.5 17l11-7.5M16.5 17l-11-7.5M8 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default HospitalBed_02;

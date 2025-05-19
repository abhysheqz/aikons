import React from "react";
const UserTime_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 20a7 7 0 0 1 10-6.326M19 18l-1-.5V16m3.5 1.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
      />
    </svg>
  );
};
export default UserTime_01;

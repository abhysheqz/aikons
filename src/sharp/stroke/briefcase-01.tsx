import React from "react";
const Briefcase_01: React.FC<
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
        d="M13.974 12H9.988v2c0 1.105.892 2 1.993 2s1.993-.895 1.993-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.51 12v9.5h16.943V12M15.502 6V2.5H8.525V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.024 14.01H6.02L2.498 10.99V6.063a.01.01 0 0 1 .01-.01h18.984a.01.01 0 0 1 .01.01v4.877l-3.57 3.07H13.95"
      />
    </svg>
  );
};
export default Briefcase_01;

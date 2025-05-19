import React from "react";
const SchoolBell_01: React.FC<
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
        d="M18 7a8.045 8.045 0 0 0-7.458-5C6.101 2 2.5 5.582 2.5 10s3.6 8 8.042 8c1.678 0 3.235-.51 4.524-1.385"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.5 12.5c0 5.5-4.5 9.5-11 9.5v-4"
      />
      <circle
        cx={19}
        cy={12.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default SchoolBell_01;

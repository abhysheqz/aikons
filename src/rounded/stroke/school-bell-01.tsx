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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 7a8.045 8.045 0 0 0-7.458-5C6.101 2 2.5 5.582 2.5 10s3.6 8 8.042 8c1.678 0 3.235-.51 4.524-1.385"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 13c0 5.1-4.393 8.595-10 8.967-.456.03-.683.045-.842-.103S10.5 21.477 10.5 21v-3"
      />
      <circle
        cx={19}
        cy={12.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={10.5}
        cy={10}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default SchoolBell_01;

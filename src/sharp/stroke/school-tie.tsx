import React from "react";
const SchoolTie: React.FC<
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
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.537 2h-6.023l1.004 4.01h4.015z"
      />
      <path
        stroke="#000"
        strokeWidth={1.5}
        d="M9.513 15.531 6 12.023l5.521-6.013M11.427 6.555 9.004 17.99 13.512 22a.01.01 0 0 0 .013 0L18 17.99 15.545 6.12"
      />
    </svg>
  );
};
export default SchoolTie;

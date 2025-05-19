import React from "react";
const SchoolReportCard: React.FC<
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
        d="M3 22h18V2H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15 14-2.5-7h-1L9 14m1-2.5h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17h10"
      />
    </svg>
  );
};
export default SchoolReportCard;

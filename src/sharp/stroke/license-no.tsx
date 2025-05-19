import React from "react";
const LicenseNo: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m2 2 20 20M8.5 17h8m-8-5h3M6 2h14.5v14.5m0 4.5v1h-17V4"
      />
    </svg>
  );
};
export default LicenseNo;

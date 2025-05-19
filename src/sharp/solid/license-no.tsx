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
        fill="currentColor"
        fillRule="evenodd"
        d="m21.75 22.334 1-.998L2.662 1.25 1.251 2.666l2 2V22.75h18.5zm-5.415-4.584-1.5-1.5H7.75v1.5zm-5-5-1.5-1.5H7.75v1.5zm10.416 5.467V1.25H4.784z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LicenseNo;

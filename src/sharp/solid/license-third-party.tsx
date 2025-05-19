import React from "react";
const LicenseThirdParty: React.FC<
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
        d="M20.25 1.25H1.75v21.5H12.5V22c0-2.148 1.377-3.751 3.144-4.511a3.25 3.25 0 0 1 4.606-4.584zm-14 4h9.5v1.5h-9.5zm0 4h8v1.5h-8zm11.75 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1c-2.235 0-4.25 1.575-4.25 3.75v.75h8.5V22c0-2.175-2.015-3.75-4.25-3.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LicenseThirdParty;

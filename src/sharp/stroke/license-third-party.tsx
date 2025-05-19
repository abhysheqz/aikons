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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.752 14.75a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0ZM21.5 22h-7c0-1.657 1.567-3 3.5-3s3.5 1.343 3.5 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19.5 10V2h-17v20H11M7 7h8m-8 5h6.5"
      />
    </svg>
  );
};
export default LicenseThirdParty;

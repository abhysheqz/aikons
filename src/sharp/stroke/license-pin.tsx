import React from "react";
const LicensePin: React.FC<
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
        d="M7 7h8m-8 5h5.5M7 17h4M19.5 10V2h-17v20H11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18.5 19h-3v-.5l1.5-2-.5-2.5h4l-.5 2.5 1.5 2v.5zm0 0v3"
      />
    </svg>
  );
};
export default LicensePin;

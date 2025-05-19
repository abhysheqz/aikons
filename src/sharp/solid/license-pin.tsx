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
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 1.25H1.75v21.5H16.5V21h-3v-3.167l1.364-1.818L14.06 12h6.19zm-14 5h9.5v1.5h-9.5zm0 5h6v1.5h-6zm0 5h5.5v1.5h-5.5zm11.5 6.5h1.5v-3h3v-1.5l-1.449-1.932.614-3.068h-5.83l.614 3.068-1.449 1.932v1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LicensePin;

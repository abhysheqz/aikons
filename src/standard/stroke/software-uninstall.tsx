import React from "react";
const SoftwareUninstall: React.FC<
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
        d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M20 15H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.245 15a8 8 0 1 0-12.49 0M17.5 5 16 6.5M16.5 17l2.5 2.5m0 0 2.5 2.5M19 19.5 16.5 22m2.5-2.5 2.5-2.5"
      />
    </svg>
  );
};
export default SoftwareUninstall;

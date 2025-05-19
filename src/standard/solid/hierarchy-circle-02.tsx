import React from "react";
const HierarchyCircle_02: React.FC<
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
        d="M16.75 6a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0M7 14a1 1 0 0 0-1 1v.385a3.752 3.752 0 0 1-1 7.365 3.75 3.75 0 0 1-1-7.365V15A3 3 0 0 1 7 12h10a3 3 0 0 1 3 3v.385a3.752 3.752 0 0 1-1 7.365 3.75 3.75 0 0 1-1-7.365V15a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchyCircle_02;

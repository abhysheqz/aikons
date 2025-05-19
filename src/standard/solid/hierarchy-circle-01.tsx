import React from "react";
const HierarchyCircle_01: React.FC<
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
        d="M12 1.25a3.75 3.75 0 0 0-1 7.365V11H7a3 3 0 0 0-3 3v1.385a3.752 3.752 0 0 0 1 7.365 3.75 3.75 0 0 0 1-7.365V14a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.385a3.752 3.752 0 0 0 1 7.365 3.75 3.75 0 0 0 1-7.365V14a3 3 0 0 0-3-3h-4V8.615a3.752 3.752 0 0 0-1-7.365"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchyCircle_01;

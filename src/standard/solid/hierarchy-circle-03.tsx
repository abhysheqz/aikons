import React from "react";
const HierarchyCircle_03: React.FC<
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
        d="M19 1.25A3.75 3.75 0 0 0 15.385 4H15a3 3 0 0 0-3 3v4h-1.355a4.752 4.752 0 0 0-9.395 1 4.75 4.75 0 0 0 9.395 1H12v4a3 3 0 0 0 3 3h.385a3.752 3.752 0 0 0 7.365-1 3.75 3.75 0 0 0-7.365-1H15a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.385a3.752 3.752 0 0 0 7.365-1A3.75 3.75 0 0 0 19 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchyCircle_03;

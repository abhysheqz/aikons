import React from "react";
const Moon_02: React.FC<
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
        d="M22 14.188A9.008 9.008 0 0 1 9.812 2C5.334 3.05 2 7.069 2 11.866 2 17.463 6.537 22 12.134 22c4.797 0 8.817-3.334 9.866-7.812"
      />
    </svg>
  );
};
export default Moon_02;

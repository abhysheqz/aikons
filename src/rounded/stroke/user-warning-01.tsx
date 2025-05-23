import React from "react";
const UserWarning_01: React.FC<
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
        d="M19.506 18.936c2.046-1.866-2.921-4.38-2.921-4.38A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0-4.585 1.057s-4.967 2.514-2.92 4.38c.999.911 2.112 1.563 3.512 1.563h7.986c1.4 0 2.513-.652 3.513-1.564M15.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M19 5v4M19 12v.01"
      />
    </svg>
  );
};
export default UserWarning_01;

import React from "react";
const SecurityPassword: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.004 11 1.5 1.5m0 0 1.501 1.5m-1.5-1.5 1.5-1.5m-1.5 1.5-1.5 1.5m-5.002-3 1.5 1.5m0 0 1.5 1.5m-1.5-1.5 1.5-1.5m-1.5 1.5-1.5 1.5M8 11l1.5 1.5m0 0 1.501 1.5m-1.5-1.5 1.5-1.5m-1.5 1.5-1.5 1.5M3 11l1.5 1.5m0 0L6 14m-1.5-1.5L6 11m-1.5 1.5L3 14"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.999 9V5c-5-.5-9-3-9-3s-4 2.5-9 3v4m1.478 7C7.031 20.068 12 22 12 22s4.967-1.932 7.52-6"
      />
    </svg>
  );
};
export default SecurityPassword;

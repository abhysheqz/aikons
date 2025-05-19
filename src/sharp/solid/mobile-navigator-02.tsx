import React from "react";
const MobileNavigator_02: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM13.5 18.25v1.5h-3v-1.5zM12 5.75c-2.29 0-4.25 1.728-4.25 3.982 0 1.29.576 2.285 1.59 3.106.284.23.7.605 1.098 1.005.407.408.756.8.938 1.073a.75.75 0 0 0 1.234.02c.42-.587 1.465-1.624 2.05-2.098 1.014-.821 1.59-1.816 1.59-3.106 0-2.254-1.96-3.982-4.25-3.982"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 10c0-.828.669-1.5 1.493-1.5h.014c.824 0 1.493.672 1.493 1.5s-.669 1.5-1.493 1.5h-.014A1.497 1.497 0 0 1 10.5 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileNavigator_02;

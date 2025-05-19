import React from "react";
const SettingError_03: React.FC<
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
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5M16.25 14v3h1.5v-3zm1.509 4.25H16.25v1.5h1.509z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.52 1.423a.75.75 0 0 1 .96 0l2.791 2.327H19.5a.75.75 0 0 1 .75.75V8.73l2.322 2.792a.75.75 0 0 1 .047.897A7.24 7.24 0 0 0 17 9.75q-.678 0-1.321.12a4.25 4.25 0 1 0-5.808 5.808A7.3 7.3 0 0 0 9.75 17a7.24 7.24 0 0 0 2.67 5.621.75.75 0 0 1-.9-.044L8.724 20.25H4.496a.75.75 0 0 1-.75-.75v-4.229L1.423 12.48a.75.75 0 0 1 0-.96L3.746 8.73V4.5a.75.75 0 0 1 .75-.75h4.228z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SettingError_03;

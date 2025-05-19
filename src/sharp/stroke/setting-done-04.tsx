import React from "react";
const SettingDone_04: React.FC<
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
        strokeWidth={1.5}
        d="M10.196 14a3.5 3.5 0 1 1 4.967-4.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 11-5-9H6.998L2 11l5 9h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.752 17 1.474 1.496 3.024-2.986M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default SettingDone_04;

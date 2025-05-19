import React from "react";
const Settings_03: React.FC<
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
        d="M7 2.25a.75.75 0 0 0-.656.386l-5 9a.75.75 0 0 0 0 .728l5 9A.75.75 0 0 0 7 21.75h10.002a.75.75 0 0 0 .656-.386l4.998-9a.75.75 0 0 0 0-.728l-4.998-9a.75.75 0 0 0-.656-.386zm5 13.25a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Settings_03;

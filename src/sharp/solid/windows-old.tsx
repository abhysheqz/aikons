import React from "react";
const WindowsOld: React.FC<
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
        d="m10.25 3.83-8 1.098v6.322h8zM2.25 12.75v6.322l8 1.099V12.75zM11.75 20.377l10 1.373v-9h-10zM21.75 11.25v-9l-10 1.373v7.627z"
      />
    </svg>
  );
};
export default WindowsOld;

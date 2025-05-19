import React from "react";
const Building_04: React.FC<
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
        d="M10.248 1.25v9.99h-5.54l2.854-8.78a1.75 1.75 0 0 1 1.664-1.21zm1.5 0V16a2.75 2.75 0 0 1-2.75 2.75h-6.73l-.981 3.018A.75.75 0 0 0 2 22.75h12a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zm-8.993 16h6.243c.69 0 1.25-.56 1.25-1.25v-3.26H4.22zM21.998 22.75h-6.092c.092-.232.142-.485.142-.75V9.968l4.915 1.843a2.75 2.75 0 0 1 1.785 2.575V22a.75.75 0 0 1-.75.75m-2.987-7.5a.75.75 0 1 0-.022 1.5l1 .015a.75.75 0 0 0 .022-1.5zm0 2.985a.75.75 0 0 0-.022 1.5l1 .015a.75.75 0 1 0 .022-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_04;

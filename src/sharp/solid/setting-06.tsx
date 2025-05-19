import React from "react";
const Setting_06: React.FC<
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
        d="M6.998 2.25a.75.75 0 0 0-.656.386l-4.998 9a.75.75 0 0 0 0 .728l5 9A.75.75 0 0 0 7 21.75h10.002a.75.75 0 0 0 .656-.386l4.998-9a.75.75 0 0 0 0-.728l-5-9A.75.75 0 0 0 17 2.25zM8.2 8.6l6 8 1.6-1.2-6-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Setting_06;

import React from "react";
const Settings_04: React.FC<
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
        d="M3 3h18v18H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 7h3v3h-3zM7 14h3v3H7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 14V7M15.5 10v7"
      />
    </svg>
  );
};
export default Settings_04;

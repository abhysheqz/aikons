import React from "react";
const Settings_05: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 14v3h-3v-3zM10 7v3H7V7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 8.5h7M14 15.5H7"
      />
    </svg>
  );
};
export default Settings_05;

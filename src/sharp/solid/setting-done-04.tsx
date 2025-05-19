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
        fill="currentColor"
        fillRule="evenodd"
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m-.75 8.31 3.53-3.53-1.061-1.06-2.47 2.47-.97-.97-1.06 1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.342 1.636a.75.75 0 0 1 .656-.386H17a.75.75 0 0 1 .656.386l5 9a.75.75 0 0 1 0 .728l-.373.671a7.23 7.23 0 0 0-6.203-2.227A4.252 4.252 0 0 0 7.75 11a4.25 4.25 0 0 0 2.34 3.798A7.3 7.3 0 0 0 9.75 17c0 1.372.381 2.656 1.044 3.75H7a.75.75 0 0 1-.656-.386l-5-9a.75.75 0 0 1 0-.728z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SettingDone_04;

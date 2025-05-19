import React from "react";
const UserSettings_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 19.5a7 7 0 0 1 10-6.326M18 20c.93 0 1.74-.507 2.171-1.26M18 20c-.93 0-1.74-.507-2.171-1.26M18 20v1.5m0-6.5c.93 0 1.74.507 2.17 1.26M18 15c-.93 0-1.74.507-2.17 1.26M18 15v-1.5m3.5 2-1.33.76M14.5 19.5l1.329-.76m5.671.76-1.329-.76M14.5 15.5l1.33.76m4.34 0c.21.365.33.788.33 1.24s-.12.875-.329 1.24m-4.342 0a2.5 2.5 0 0 1-.329-1.24c0-.451.12-.875.33-1.24"
      />
    </svg>
  );
};
export default UserSettings_01;

import React from "react";
const AccountSetting_02: React.FC<
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
        d="M14.953 2H9.047v2.582L7.155 5.694 4.953 4.402 2 9.598l2.202 1.291v2.222L2 14.4l2.953 5.197 2.202-1.292 1.892 1.113V22h5.906v-2.581l1.892-1.113 2.202 1.292L22 14.402l-2.201-1.291v-2.222L22 9.6l-2.953-5.197-2.202 1.292-1.892-1.112z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.5 16a4.04 4.04 0 0 1 3.5-2.02A4.04 4.04 0 0 1 15.5 16M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default AccountSetting_02;

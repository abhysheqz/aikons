import React from "react";
const NotificationBlock_01: React.FC<
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
        d="M10 19c0 1.116.878 2 1.976 2C13.094 21 14 20.095 14 19h2c0 2.219-1.82 4-4.024 4C9.75 23 8 21.198 8 19zM9.728 3.553a1.75 1.75 0 0 1 1.66-2.303h1.225a1.75 1.75 0 0 1 1.66 2.303l-.28.842-.579.842c-.158.33-.388.513-.711.513H11a.75.75 0 0 1-.712-.513z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.045 4.863a6 6 0 0 0 6.328 10.175c.167-.091.385-.093.504.056l.709.938a.75.75 0 0 1 .164.468V18A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18v-1.5a.75.75 0 0 1 .164-.468l1.836-2.295V12A7.75 7.75 0 0 1 12 4.25h1.988l.175.175c.077.077.079.2.008.282q-.064.075-.126.156"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 9.77a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m2.172-.914a2.5 2.5 0 0 0 3.241 3.241zm1.414-1.414 3.242 3.241a2.5 2.5 0 0 0-3.241-3.241"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationBlock_01;

import React from "react";
const DeliveryBox_02: React.FC<
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
        d="M2 3v-.75a.75.75 0 0 0-.75.75zm20 0h.75a.75.75 0 0 0-.75-.75zM2 8h-.75v.75H2zm20 0v.75h.75V8zM2 3.75h20v-1.5H2zm0 5h20v-1.5H2zM2.75 8V3h-1.5v5zm18.5-5v5h1.5V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8v13h18V8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 11h5M21.9 3H2.1a.1.1 0 0 0-.1.1V8h20V3.1a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default DeliveryBox_02;

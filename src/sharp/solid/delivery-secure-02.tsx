import React from "react";
const DeliverySecure_02: React.FC<
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
        d="M2 1.75a.75.75 0 0 0-.75.75v5.75h1v12.033c0 .257.103.503.286.684a.98.98 0 0 0 .689.283H12v-1.933H4.2V8.25h15.6v1.783L21.75 10V8.25h1V2.5a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 11.5h-5v-2h5zM18.5 11.75a2.75 2.75 0 0 0-2.75 2.75v.75h-1.5v7h8.5v-7h-1.5v-.75a2.75 2.75 0 0 0-2.75-2.75m1.25 2.75v.75h-2.5v-.75a1.25 1.25 0 1 1 2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliverySecure_02;

import React from "react";
const DeviceAccess: React.FC<
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
        d="M2.25 1.25h15.5v9.758a4 4 0 0 0-4.22 3.492H12v8.25H2.25zM11 20.01V18H9v2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 12.25A2.75 2.75 0 0 0 14.75 15v.75h-1.5v7h8.5v-7h-1.5V15a2.75 2.75 0 0 0-2.75-2.75m1.25 3.5V15a1.25 1.25 0 1 0-2.5 0v.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeviceAccess;

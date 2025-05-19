import React from "react";
const Cookie: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12c0 5.523 4.488 10 10.023 10 5.208 0 9.488-3.962 9.977-9.03q-.223.03-.454.03a3.505 3.505 0 0 1-3.501-3.272A2.002 2.002 0 0 1 15.03 8c0-.601.265-1.14.686-1.507a3.496 3.496 0 0 1-1.459-4.243A10 10 0 0 0 12.024 2C6.488 2 2 6.477 2 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.009 12H11M6.009 10H6M12.009 18H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6 9 7M16.5 14.5l-1 1M7 15l1 1"
      />
    </svg>
  );
};
export default Cookie;

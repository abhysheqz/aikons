import React from "react";
const GoForwardSec_5: React.FC<
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
        d="m12 5 1.104-1.545c.41-.576.617-.864.487-1.13-.13-.268-.46-.283-1.12-.314Q12.237 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.99 9.99 0 0 0-4-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10h-3.09a.5.5 0 0 0-.49.402L10 12.5c.694-.165 1.355-.357 2.071-.357a1.929 1.929 0 1 1 0 3.857c-.827 0-1.808.017-2.04-1"
      />
    </svg>
  );
};
export default GoForwardSec_5;

import React from "react";
const GoForwardSec_30: React.FC<
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
        d="m12 5 2-2.8q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.99 9.99 0 0 0-4-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.982 13.017h2.458m-2.926-1.903v-1.002a.1.1 0 0 1 .1-.1h2.907v5.999H7.615a.1.1 0 0 1-.1-.1v-1.013m5.556 1.212h3.345a.1.1 0 0 0 .1-.1v-5.898a.1.1 0 0 0-.1-.1H13.07a.1.1 0 0 0-.1.1v5.898a.1.1 0 0 0 .1.1Z"
      />
    </svg>
  );
};
export default GoForwardSec_30;

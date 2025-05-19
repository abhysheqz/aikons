import React from "react";
const Kissing: React.FC<
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
        d="M15.5 21.37A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c5.645 0 10.265 4.871 9.988 10.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9.5a1.5 1.5 0 0 0-3 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.009 9H8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 14c.742 0 2.215.284 2.832.796.562.466-.909.858-.909 1.204s1.585.644.91 1.204c-.618.512-2.091.796-2.833.796M19.35 14.914c.856-.479 1.917-.14 2.404.793s.227 2.11-.576 2.691l-1.555.992c-.753.48-1.502.61-1.502.61s-.59-.527-1.026-1.361l-.9-1.72c-.433-.948-.126-2.114.716-2.65.843-.536 1.913-.245 2.44.645Z"
      />
    </svg>
  );
};
export default Kissing;

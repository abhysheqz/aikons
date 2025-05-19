import React from "react";
const Tsunami: React.FC<
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
        d="M7.066 12s0 3 2.934 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 21.373a4.92 4.92 0 0 1-4.74 0 2.99 2.99 0 0 0-2.89 0s-.021 0-.021.019c-1.446.81-3.295.81-4.719 0-.892-.498-2.019-.498-2.89 0m0-.019a4.92 4.92 0 0 1-4.74 0M22 16.5c-5.247 0-11-4.253-11-9.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.744 18.982c-1.055-3.919-1.128-9.85.795-12.879 1.912-3.008 4.08-3.76 4.765-3.869 1.217-.4 4.068-.558 5.909 1.864.52.822 1.158 2.536.278 3.916-.632-.435-2.367-1.579-4.002-.967-1.874.701-2.684.472-3.591-.133"
      />
    </svg>
  );
};
export default Tsunami;

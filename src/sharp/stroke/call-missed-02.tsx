import React from "react";
const CallMissed_02: React.FC<
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
        strokeWidth={1.5}
        d="m7.255 13.462-.154 4.5-5.051 1.992a.01.01 0 0 1-.014-.008c-.149-2.271.123-3.868 1.253-4.679 1.476-1.059 4.217-2.202 8.01-2.29 1.473-.133 3.434.002 5.498.622m0 0c2.162.65 4.742 1.409 5.143 3.641.088.492.096 2.048-.079 2.755a.01.01 0 0 1-.01.006l-5.054-2.039zM16.982 3.999l-5.01 4.98a.01.01 0 0 1-.013 0L7.347 4.366m-.33 3.139V4.037h3.46"
      />
    </svg>
  );
};
export default CallMissed_02;

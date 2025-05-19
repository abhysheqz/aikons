import React from "react";
const WebValidation: React.FC<
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
        strokeWidth={1.5}
        d="M21 10c-.01-3.585-.114-5.472-1.391-6.682C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.318S2 6.758 2 11s0 6.364 1.391 7.682c1.227 1.162 3.112 1.3 6.609 1.316"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 17.5s.5 0 1 1c0 0 1.588-2.5 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8.5h19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 5.5h.009M10.5 5.5h.009"
      />
    </svg>
  );
};
export default WebValidation;

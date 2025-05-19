import React from "react";
const Image_02: React.FC<
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
        d="m2.5 16.502 6.498-6.498 5.25 5.25m7.252 1.248-4.5-4-2.752 2.752m2.252 2.252-2.252-2.252"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.5 8.002a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 21.502v-19h-19v19z"
      />
    </svg>
  );
};
export default Image_02;

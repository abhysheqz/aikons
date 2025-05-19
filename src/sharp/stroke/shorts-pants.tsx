import React from "react";
const ShortsPants: React.FC<
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
        d="m8.492 13.502 1.5 1.5h4l1.5-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.992 5.002h16M3.492 11.002s3.5 0 3.5-6M16.992 5.002c0 6 3.5 6 3.5 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.002 2v2.985L22 20.99a.01.01 0 0 1-.009.011L14.027 22a.01.01 0 0 1-.011-.008l-1.028-6.98h-1.99l-1 6.98a.01.01 0 0 1-.01.008l-7.98-.999A.01.01 0 0 1 2 20.99L3.991 4.91V2z"
      />
    </svg>
  );
};
export default ShortsPants;

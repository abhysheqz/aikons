import React from "react";
const RamadhanMonth: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 2v2m-12-2v2M3 12.243c0-4.357 0-6.536 1.252-7.89C5.504 3 7.52 3 11.55 3h1.9c4.03 0 6.046 0 7.298 1.354C22 5.707 22 7.886 22 12.244v.513c0 4.357 0 6.536-1.252 7.89C19.496 22 17.48 22 13.45 22h-1.9c-4.03 0-6.046 0-7.298-1.354C3 19.293 3 17.114 3 12.756zM3.5 8h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.5 16.434A3.23 3.23 0 1 1 11.066 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 13h.009"
      />
    </svg>
  );
};
export default RamadhanMonth;

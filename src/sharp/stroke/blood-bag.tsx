import React from "react";
const BloodBag: React.FC<
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
        d="M5 7.372c8-4.13 6.5 2.633 14 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18h14V2H5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m12.014 10-1.44 1.488a2.127 2.127 0 0 0 .013 2.92 1.97 1.97 0 0 0 2.828-.014 2.114 2.114 0 0 0 0-2.92z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 22a4 4 0 0 0 4-4"
      />
    </svg>
  );
};
export default BloodBag;

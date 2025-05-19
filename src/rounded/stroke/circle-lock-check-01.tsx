import React from "react";
const CircleLockCheck_01: React.FC<
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
        d="M13 18s1 0 2 2c0 0 3.177-5 6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16 12c-1.096-2.365-3.447-4-6.171-4C6.057 8 3 11.134 3 15s3.057 7 6.829 7q.496 0 .975-.07"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 9.5v-3a4.5 4.5 0 1 0-9 0v3"
      />
    </svg>
  );
};
export default CircleLockCheck_01;

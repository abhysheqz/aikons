import React from "react";
const Share_07: React.FC<
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
        d="M20.5 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM21.5 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.535 4.581a8 8 0 0 0-1.162-.081 8.15 8.15 0 0 0-7.132 4.163m13.472-1.168A7.9 7.9 0 0 1 21.5 12.5c0 1.376-.353 2.67-.974 3.801m-4.644 3.81a8.2 8.2 0 0 1-2.509.389c-3.79 0-6.974-2.555-7.873-6.01"
      />
    </svg>
  );
};
export default Share_07;

import React from "react";
const Chimney: React.FC<
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
        d="m15.5 22-1.117-5.024c-.587-2.643-.883-6.27-.883-8.976h-7c0 2.707-.296 6.333-.883 8.976L4.5 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 22h14M17 2h-4a3 3 0 0 0-3 3M20 2h1M13 5h6"
      />
    </svg>
  );
};
export default Chimney;

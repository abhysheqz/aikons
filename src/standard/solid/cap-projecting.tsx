import React from "react";
const CapProjecting: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 8.75a3 3 0 1 0 2.83 4h8.92v-2h-8.92a3 3 0 0 0-2.83-2m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 4h-16A2.75 2.75 0 0 0 2 6.75v10a2.75 2.75 0 0 0 2.75 2.75h16a.75.75 0 0 0 .75-.75V14h-8.144a4.25 4.25 0 1 1 0-4.5H21.5V4.75a.75.75 0 0 0-.75-.75"
      />
    </svg>
  );
};
export default CapProjecting;

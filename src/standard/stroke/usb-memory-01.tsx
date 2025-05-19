import React from "react";
const UsbMemory_01: React.FC<
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
        d="M8.5 17a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.207 4.707a1 1 0 0 0-1.414 0l-8.242 8.247a5.3 5.3 0 0 0 0 7.494 5.294 5.294 0 0 0 7.49 0l8.251-8.246a1 1 0 0 0 0-1.415zM18.5 9.5l2.793-2.793a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L14.5 5.5"
      />
    </svg>
  );
};
export default UsbMemory_01;

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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m20.5 10.978-9.473 9.473a5.288 5.288 0 0 1-7.478-7.478L13.022 3.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.5 17a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.85 5 3-3L22 6.15l-3.001 3"
      />
    </svg>
  );
};
export default UsbMemory_01;

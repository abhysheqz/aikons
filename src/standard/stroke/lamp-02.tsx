import React from "react";
const Lamp_02: React.FC<
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
        d="M9 13a3 3 0 1 0 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.982 20v2m2.992-3 1.996 1.5M8.988 19l-1.995 1.5M12 6.5V2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.664 9.504 4 12s2.5 1 8 1 8-1 8-1l-1.664-2.496a2 2 0 0 0-.895-.737L12 6.5 6.559 8.767a2 2 0 0 0-.895.737Z"
      />
    </svg>
  );
};
export default Lamp_02;

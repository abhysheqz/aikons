import React from "react";
const QrCode_01: React.FC<
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
        d="M18 15v3h-4v-3zM9 2.5H4.5a2 2 0 0 0-2 2V9M15 2.5h4.5a2 2 0 0 1 2 2V9M15 21.5h4.5a2 2 0 0 0 2-2V15M9 21.5H4.5a2 2 0 0 1-2-2V15M13 6v7H6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6v4H6V6zM6 18h5M17 10.5V12M17 6v1.5"
      />
    </svg>
  );
};
export default QrCode_01;

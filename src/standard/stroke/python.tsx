import React from "react";
const Python: React.FC<
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
        d="M11 5.5v.01M13 18.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.499 3h-5a1 1 0 0 0-1 1v4.5H3.998a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4.5V20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4.5h4.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.5V4a1 1 0 0 0-1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 8.5V12h-7v3.5m3.5 0h3.5m-7-7H12"
      />
    </svg>
  );
};
export default Python;

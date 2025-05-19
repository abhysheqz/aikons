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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 5.5v.01M13 18.49v.01M15.499 3h-7v5.5H2.998v7h5.5V21h7v-5.5h5.5v-7h-5.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.5 8.5V12h-7v3.5m3.5 0h3.5m-7-7H12"
      />
    </svg>
  );
};
export default Python;

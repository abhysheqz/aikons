import React from "react";
const Flag_01: React.FC<
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
        d="M5.014 21.005V16.01m0 0L5.04 3.015a.01.01 0 0 1 .014-.01L19.008 9.04a.01.01 0 0 1 0 .018z"
      />
    </svg>
  );
};
export default Flag_01;

import React from "react";
const Setting_06: React.FC<
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
        d="M17.002 21 22 12l-5-9H6.998L2 12l5 9z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m9 8 6 8" />
    </svg>
  );
};
export default Setting_06;

import React from "react";
const Package_03: React.FC<
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
        d="m15.5 4-8 4v2.5M5.5 16v-3L9 14.5v3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m21 6-9-4-9 4m18 0-9 4m9-4v12l-9 4m0-12L3 6m9 4v12M3 6v12l9 4"
      />
    </svg>
  );
};
export default Package_03;

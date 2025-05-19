import React from "react";
const Activity_02: React.FC<
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
        d="M6.5 14.5 10 11l3 3 3.5-3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 9.5v12h-18v-18h12"
      />
    </svg>
  );
};
export default Activity_02;

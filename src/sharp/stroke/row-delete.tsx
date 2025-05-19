import React from "react";
const RowDelete: React.FC<
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
        d="M21 15H3v7h18z"
      />
      <path
        fill="currentColor"
        d="M3 11h-.75c0 .414.336.75.75.75zm17 .75h.75v-1.5H20zM3 4v-.75a.75.75 0 0 0-.75.75zm17 6.25H3v1.5h17zM2.25 4v7h1.5V4zm.75.75h10v-1.5H3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 8-6-6m6 0-6 6"
      />
    </svg>
  );
};
export default RowDelete;

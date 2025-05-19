import React from "react";
const Bus_01: React.FC<
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
      <path fill="currentColor" d="M6 18.75v3h2v-3zM16 18.75v3h2v-3z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.72 2.25a.974.974 0 0 0-.97.978l.001 15.545c0 .54.435.977.97.977h14.56c.536 0 .97-.437.97-.977L20.25 3.228a.974.974 0 0 0-.97-.978zm.971 10V4.205H18.31v8.045zM7.5 16.75h-2v-1.5h2zm9 0h2v-1.5h-2zm-2.5 0h-4v-1.5h4z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 8v3m20-3v3"
      />
    </svg>
  );
};
export default Bus_01;

import React from "react";
const TeaPod: React.FC<
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
        d="M10 10V6.5A4.5 4.5 0 0 1 14.5 2v0A4.5 4.5 0 0 1 19 6.5V10M14.5 9.5v-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22a2 2 0 0 1-2-2v-3l-5-6 1.5-2L8 11.5s2-2 6.5-2c3.285 0 5.77 1.598 6.873 2.462.418.327.627.836.627 1.366V20a2 2 0 0 1-2 2z"
      />
    </svg>
  );
};
export default TeaPod;

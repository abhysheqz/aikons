import React from "react";
const Trulli: React.FC<
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
        d="m2.5 12 7.391-8.97c1.13-1.373 3.087-1.373 4.218 0L21.5 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8c3 1.507 4.821-2.782 7.58-.09C15 9.296 16.415 9.203 18 8.502M10 22v-4a2 2 0 0 1 4 0v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 12v10h-15V12"
      />
    </svg>
  );
};
export default Trulli;

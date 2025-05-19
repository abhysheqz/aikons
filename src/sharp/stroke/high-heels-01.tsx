import React from "react";
const HighHeels_01: React.FC<
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
        d="M17.984 18.003c-.967.667-2.31 1.867-1.935 4M6.484 5.003l9 2.5M3.984 7.003c3 2 4 4.5 2 7.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.991 21.998H21v-2.946c-3.105-1.092-4.542-.955-5.483-2.31-.782-1.126-.774-2.965-.466-5.67l.64-4.572.296-2.474a.01.01 0 0 0-.008-.011L7.99 1.998 6.5 5.016C3.998 6.132 3 7.616 3 11.035q0 .003.002.006L7.54 16.59z"
      />
    </svg>
  );
};
export default HighHeels_01;

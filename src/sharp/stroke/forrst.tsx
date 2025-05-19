import React from "react";
const Forrst: React.FC<
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
        d="m13.444 18.948 3-3M13.444 14.948l2-2M10.444 16.948l-2.5-2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.505 20.998v-8.985h2.958v8.985h8.525a.01.01 0 0 0 .01-.015L11.988 3.007a.01.01 0 0 0-.018 0L2.004 20.983a.01.01 0 0 0 .009.015z"
      />
    </svg>
  );
};
export default Forrst;

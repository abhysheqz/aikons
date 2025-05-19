import React from "react";
const Variable: React.FC<
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
        d="M2.5 5.5v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3M3 9h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 6h.009m3.982 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 13 2 2m0 0 2 2m-2-2 2-2m-2 2-2 2m-3-5a5.05 5.05 0 0 0-1 3 5.05 5.05 0 0 0 1 3m10-6c.633.863 1 1.893 1 3a5.05 5.05 0 0 1-1 3"
      />
    </svg>
  );
};
export default Variable;

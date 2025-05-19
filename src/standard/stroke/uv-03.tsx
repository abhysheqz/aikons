import React from "react";
const Uv_03: React.FC<
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
        d="M17 13a5 5 0 0 0-10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 4h.009m6.358 2.633.006.006m-12.736 0 .006-.006M21 12.996v.009m-18-.01v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 16v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4M13 16l2 5h1l2-5"
      />
    </svg>
  );
};
export default Uv_03;

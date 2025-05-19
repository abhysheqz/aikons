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
        d="M12 4h.009M18.367 6.633l.006.006M5.637 6.64l.006-.007M21.004 12.996v.009M3.004 12.996v.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 16v3c0 .943 0 1.414.293 1.707S7.557 21 8.5 21v0c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 16 2 5 2-5"
      />
    </svg>
  );
};
export default Uv_03;

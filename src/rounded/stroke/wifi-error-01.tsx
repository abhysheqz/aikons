import React from "react";
const WifiError_01: React.FC<
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
        d="M18.5 9.998c-3.768-3.333-9-3.333-13 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6.999c6.316-5.332 13.684-5.332 20 0M11.993 14.985v1.511m0 1.971v.031m.151-6.49c.35-.014 1.231.155 2.09 1.674l2.154 3.692c.823 1.218 1.227 3.404-1.8 3.568L12 21l-2.616-.074c-3.028-.164-2.562-2.332-1.801-3.567l2.154-3.692c.86-1.52 1.741-1.689 2.09-1.675z"
      />
    </svg>
  );
};
export default WifiError_01;

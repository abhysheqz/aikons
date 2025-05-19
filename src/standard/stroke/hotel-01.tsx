import React from "react";
const Hotel_01: React.FC<
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
        d="M10.5 8v2m0 0v2m0-2h3m0-2v2m0 0v2M14.006 22v-3.999a2.001 2.001 0 1 0-4.002 0v4M6 8h1m-1 4h1M17 8h1m-1 4h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 4v17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4M2 4h6c1-1.5 2.426-2 4-2s3 .5 4 2h6"
      />
    </svg>
  );
};
export default Hotel_01;

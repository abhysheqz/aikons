import React from "react";
const AlbumNotFound_01: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m4 18 7-7m7 2-5-4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20M18.002 14.821V2.99H6.222M18.002 18H3.012V2.65"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.252 5.99h3.746v11.866m-14.984.17v2.971h14.984"
      />
    </svg>
  );
};
export default AlbumNotFound_01;

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
      <path stroke="currentColor" strokeWidth={1.5} d="M3.008 4v18H21.02V4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.513 7v2.5m0 0V12m0-2.5h3.001m0-2.5v2.5m0 0V12M14.015 22v-6h-4.002v6M5.51 8h2m-2 4h2m-2 4h2M16.517 8h2m-2 4h2m-2 4h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M1.5 3.991h6.545c.69-1.711 5.505-3.459 7.918 0H22.5"
      />
    </svg>
  );
};
export default Hotel_01;

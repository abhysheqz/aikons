import React from "react";
const Cabinet_03: React.FC<
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
        d="M5.5 18v3m13-3v3M21 3H3v10c0 2.357 0 3.535.824 4.268S5.974 18 8.625 18h6.75c2.652 0 3.977 0 4.801-.732C21 16.535 21 15.357 21 13zM2 3h20M3 10.5h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 13.5.155.078c.42.21.631.315.858.369s.461.053.931.053h.112c.47 0 .705 0 .931-.053.227-.054.437-.16.858-.37L14 13.5M10 6.5l.155.078c.42.21.631.315.858.369s.461.053.931.053h.112c.47 0 .705 0 .931-.053.227-.054.437-.16.858-.37L14 6.5"
      />
    </svg>
  );
};
export default Cabinet_03;

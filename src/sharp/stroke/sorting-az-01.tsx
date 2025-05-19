import React from "react";
const SortingAz_01: React.FC<
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
        strokeWidth={1.5}
        d="M14.497 9.504h3.997v.5l-3.5 3.993v.5h4.002M3.002 14.995 5 9.004h1l1.998 5.991"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.001 12h2.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.002 8.03V5.104a.1.1 0 0 1 .1-.1h16.646M15.93 1.999l2.235 2.723M21.998 15.97v2.927a.1.1 0 0 1-.1.1H5.252m2.819 3.004-2.235-2.723"
      />
    </svg>
  );
};
export default SortingAz_01;

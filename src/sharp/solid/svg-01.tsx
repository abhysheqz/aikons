import React from "react";
const Svg_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 15.25h4.5v1.5h-3v1.5h3v4.5h-4.5v-1.5h3v-1.5h-3zM15.75 15.25h5v2.5h-1.5v-1h-2v4.5h2v-1h-1v-1.5h2.5v4h-5zM9.985 15.25l1.765 5.318 1.765-5.319h1.428l-2.316 7.5h-1.754l-2.316-7.5zM3.25 13.75l.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Svg_01;

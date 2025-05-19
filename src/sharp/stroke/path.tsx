import React from "react";
const Path: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 13.463c3 1.492 6-.643 6-3.07S14.761 6 12 6s-5 1.967-5 4.393c0 .99.372 1.902 1 2.637m3 .433V9.905m0 3.558v2.383c0 .98 0 1.47-.227 1.74-.648.772-1.773.354-2.273-.358"
      />
    </svg>
  );
};
export default Path;

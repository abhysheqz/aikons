import React from "react";
const BorderTop_01: React.FC<
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
        d="M21 7V3H3v4m0 10v4h4m14-4v4h-4m4-12v6M3 15V9m12 12H9M21 12h-4M7 12H3m9-3v3m0 0v3m0-3h3m-3 0H9m3 5v4"
      />
    </svg>
  );
};
export default BorderTop_01;

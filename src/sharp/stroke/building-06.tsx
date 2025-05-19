import React from "react";
const Building_06: React.FC<
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
        d="M6.992 6.02h3.997M6.992 9.014h3.997m-3.997 2.994h3.997M11.488 21.988V16H6.492v5.988"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.029 21.999H3.002V2.012a.01.01 0 0 1 .01-.01h12.007a.01.01 0 0 1 .01.01v5.993m0 13.994h5.97V8.015a.01.01 0 0 0-.01-.01h-5.96m0 13.994V8.005"
      />
    </svg>
  );
};
export default Building_06;

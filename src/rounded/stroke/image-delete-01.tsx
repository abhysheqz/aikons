import React from "react";
const ImageDelete_01: React.FC<
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
        d="M5 21c4.21-4.751 8.941-11.052 16-6.327"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 12.5c0 4.478 0 6.718-1.391 8.109S15.979 22 11.5 22c-4.478 0-6.718 0-8.109-1.391S2 16.979 2 12.5c0-4.478 0-6.718 1.391-8.109S7.021 3 11.5 3M22 9l-3.5-3.5m0 0L15 2m3.5 3.5L22 2m-3.5 3.5L15 9"
      />
    </svg>
  );
};
export default ImageDelete_01;

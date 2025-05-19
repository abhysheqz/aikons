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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 12v10H2V4h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4 22 10-9 6 4M22 9l-3.5-3.5m0 0L15 2m3.5 3.5L22 2m-3.5 3.5L15 9"
      />
    </svg>
  );
};
export default ImageDelete_01;

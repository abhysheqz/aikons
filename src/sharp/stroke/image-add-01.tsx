import React from "react";
const ImageAdd_01: React.FC<
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
        d="M22 6h-4m0 0h-4m4 0V2m0 4v4M20 12v10H2V4h10"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m4 22 10-9 6 4" />
    </svg>
  );
};
export default ImageAdd_01;

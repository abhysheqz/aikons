import React from "react";
const ImageUpload_01: React.FC<
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
        d="M20 10v12H2V4h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4 22 10-9 6 4M16 10V2.527M19 5l-3-3-3 3"
      />
    </svg>
  );
};
export default ImageUpload_01;

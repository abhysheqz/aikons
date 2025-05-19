import React from "react";
const ImageRemove_01: React.FC<
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
        d="M20 9v12H2V3h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4 21 10-9 6 4M22 5h-8"
      />
    </svg>
  );
};
export default ImageRemove_01;

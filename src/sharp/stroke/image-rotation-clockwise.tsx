import React from "react";
const ImageRotationClockwise: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 17.5 17 13l-4.5 4.5L10 15l-3.5 3.5M11 7a5 5 0 1 0-8 6m8-6-1-4m1 4L7.5 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M11.492 11.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 7h8v14H6V11"
      />
    </svg>
  );
};
export default ImageRotationClockwise;

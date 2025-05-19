import React from "react";
const ImageRemove_02: React.FC<
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
        d="m2.5 16.502 6.498-6.498 5.25 5.25m7.252 1.248-4.5-4-2.752 2.752m2.252 2.252-2.252-2.252"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 10.002v11.5h-19v-19H12M21.5 6h-7"
      />
    </svg>
  );
};
export default ImageRemove_02;

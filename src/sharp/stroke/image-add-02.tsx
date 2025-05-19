import React from "react";
const ImageAdd_02: React.FC<
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
        d="m2.5 16.501 6.498-6.498 5.25 5.25M21.5 16.5l-4.5-4-2.752 2.752m2.252 2.252-2.252-2.252"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 11.001v10.5h-19v-19H13M21.5 5.999H18m0 0h-3.5m3.5 0v-3.5m0 3.5v3.5"
      />
    </svg>
  );
};
export default ImageAdd_02;

import React from "react";
const ImageNotFound_01: React.FC<
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
        d="M15.5 8.002a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1M2 2l20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 21V2.502H3M2.5 6.5v15.002h15.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.5 16.502 5.001-5.001M21.5 16.502l-4.5-4-2.249 2.249"
      />
    </svg>
  );
};
export default ImageNotFound_01;

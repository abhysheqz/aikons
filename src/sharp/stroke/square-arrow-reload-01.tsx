import React from "react";
const SquareArrowReload_01: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.013 12.004v2.41h-7.87a.1.1 0 0 0-.078.164l2.428 2.926m-2.48-5.5v-2.41h7.87a.1.1 0 0 0 .077-.164l-2.428-2.926"
      />
    </svg>
  );
};
export default SquareArrowReload_01;

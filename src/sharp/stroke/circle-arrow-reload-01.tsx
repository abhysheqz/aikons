import React from "react";
const CircleArrowReload_01: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.013 12.004v-2.41h7.87a.1.1 0 0 0 .077-.164l-2.428-2.926m2.48 5.5v2.41H8.144a.1.1 0 0 0-.078.164l2.428 2.926"
      />
    </svg>
  );
};
export default CircleArrowReload_01;

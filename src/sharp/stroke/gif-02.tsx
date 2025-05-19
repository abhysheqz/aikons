import React from "react";
const Gif_02: React.FC<
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
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 14h-2.5v2.5m0 0V19m0-2.5h2M13 14h1.5m0 0H16m-1.5 0v5M13 19h1.5m0 0H16m-5.5-5H7v5h3.5v-2.5h-1"
      />
    </svg>
  );
};
export default Gif_02;

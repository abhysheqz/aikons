import React from "react";
const Gif_01: React.FC<
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
        d="M8 17v-1H4v6h4v-2.5H6.667M11 16h1.5m0 0H14m-1.5 0v6M11 22h1.5m0 0H14m6-6h-3v3m0 0v3m0-3h2.5M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default Gif_01;

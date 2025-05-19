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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17v-1H4v6h4v-2.5H6.667M11 16h1.5m0 0H14m-1.5 0v6M11 22h1.5m0 0H14m6-6h-3v3m0 0v3m0-3h2.5M4 13l.014-9a2 2 0 0 1 2.002-1.998l6.976.008L20 8.997V13M12.997 2.5V7a2 2 0 0 0 2 2H19.5"
      />
    </svg>
  );
};
export default Gif_01;

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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 15.25h5.5v2.5h-1.5v-1h-2.5v4.5h2.5v-1H5.917v-1.5H8.75v4h-5.5zm7 0h4.5v1.5h-1.5v4.5h1.5v1.5h-4.5v-1.5h1.5v-4.5h-1.5zm6 0h4.5v1.5h-3v1.5h2.5v1.5h-2.5v3h-1.5zM3.25 13.75l.002-12.5h10.11l7.388 7.38v5.12zM18.8 9.46l-6.237-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gif_01;

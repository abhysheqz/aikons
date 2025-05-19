import React from "react";
const PaintBucket: React.FC<
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
        d="M10.074 1.287a.973.973 0 0 0-1.379-.001.98.98 0 0 0 0 1.382l1.243 1.247-8.087 8.113a2.92 2.92 0 0 0 0 4.122l5.478 5.496a2.9 2.9 0 0 0 4.11 0l8.784-8.782a.9.9 0 0 0 .276-.67.98.98 0 0 0-.284-.733zM5.372 11.26l5.944-5.963 5.944 5.963z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.234 16.206a.75.75 0 0 1 1.032 0l.008.008c.204.212.794.825 1.057 1.147.264.323.543.701.76 1.086.206.365.409.83.409 1.303a2.75 2.75 0 1 1-5.5 0c0-.473.203-.938.409-1.303a8 8 0 0 1 .76-1.086c.267-.326 1.065-1.155 1.065-1.155"
      />
    </svg>
  );
};
export default PaintBucket;

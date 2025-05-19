import React from "react";
const Php: React.FC<
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
        d="M21.5 18.5v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 15v-2.5m0 0V10h1.25a1.25 1.25 0 1 1 0 2.5zM16 15v-2.5m0 0V10h1.25a1.25 1.25 0 1 1 0 2.5zM10.5 10v2.5m0 0V15m0-2.5h3m0 0V10m0 2.5V15"
      />
    </svg>
  );
};
export default Php;

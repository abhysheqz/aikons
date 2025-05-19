import React from "react";
const Socks: React.FC<
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
        d="M13.5 6V3h7v3zM20.5 6v8.985l-4.984 4.983a3.526 3.526 0 0 1-4.984 0 3.52 3.52 0 0 1 0-4.98L13.5 12V6M10.5 6h-3V3h3M7.5 6v6l-2.968 2.988a3.52 3.52 0 0 0 0 4.98 3.52 3.52 0 0 0 2.968 1M11 14.5l5 5M5 14.5l2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20.5 12a3 3 0 0 0-2.236 5"
      />
    </svg>
  );
};
export default Socks;

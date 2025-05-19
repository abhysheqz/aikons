import React from "react";
const Coins_01: React.FC<
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
      <ellipse
        cx={15.5}
        cy={11}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={6.5}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 15.5c0 1.105-2.91 2-6.5 2s-6.5-.895-6.5-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 11v8.8c0 1.215-2.91 2.2-6.5 2.2S9 21.015 9 19.8V11"
      />
      <ellipse
        cx={8.5}
        cy={4}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={6.5}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 11c-2 0-4.63-.825-5-2m5 7c-2 0-4.63-.825-5-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21c-2 0-4.63-.826-5-2V4M15 7V4"
      />
    </svg>
  );
};
export default Coins_01;

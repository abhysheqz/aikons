import React from "react";
const FlipBottom: React.FC<
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
        d="M21.001 6.999v2m-18.003-2v2m18.003-4V2.002H18m-12 0H2.998L3.015 5M15.999 2h-3m-2 0H8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.998 11.985h18.003V21.9a.1.1 0 0 1-.1.1H3.098a.1.1 0 0 1-.1-.1z"
      />
    </svg>
  );
};
export default FlipBottom;

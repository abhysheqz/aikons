import React from "react";
const FlipPhone: React.FC<
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
        d="M18.5 5h-13v10.5a6.5 6.5 0 1 0 13 0z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 8.5H9v4h6z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 18h3M5.5 5V2"
      />
    </svg>
  );
};
export default FlipPhone;

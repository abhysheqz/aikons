import React from "react";
const WpsOfficeRectangle: React.FC<
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
        strokeWidth={1.5}
        d="M13.327 14.415 14.1 16h.4L18 8.5V8h-4.2L12 11.692 9.9 16h-.4L6 8.5V8h4.2l.488 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h18v18H3z"
      />
    </svg>
  );
};
export default WpsOfficeRectangle;

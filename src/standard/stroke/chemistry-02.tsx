import React from "react";
const Chemistry_02: React.FC<
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
        d="M3 9h8.5M21 9h-5.5M5 3v16a2 2 0 0 0 2 2h14M10.5 4h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 4v5l-2.887 6.6a1 1 0 0 0 .916 1.4h7.942a1 1 0 0 0 .916-1.4L15.5 9V4"
      />
    </svg>
  );
};
export default Chemistry_02;

import React from "react";
const ContentWriting: React.FC<
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
        d="M21 10V2.5H2v17h7.5M2 8.5h19M13 19l6.5-6.5L22 15l-6.5 6.5H13z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M5.5 5.5h.01m3.98 0h.01"
      />
    </svg>
  );
};
export default ContentWriting;

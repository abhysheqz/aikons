import React from "react";
const Pdf_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M20 16h-3.5v3m0 0v3m0-3h3m-15 3v-2.5m0 0V16h1.75a1.75 1.75 0 1 1 0 3.5zm6-3.5H12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5z"
      />
    </svg>
  );
};
export default Pdf_01;

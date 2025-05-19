import React from "react";
const Hdr_01: React.FC<
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
        d="M4 16v3m0 3v-3m3.5-3v3m0 3v-3m0 0H4M10 22v-6h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zM16 19.5V16h2.25a1.75 1.75 0 1 1 0 3.5m-2.25 0V22m0-2.5h2.25m0 0L20 22M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default Hdr_01;

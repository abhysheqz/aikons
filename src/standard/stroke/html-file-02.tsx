import React from "react";
const HtmlFile_02: React.FC<
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
        d="M5 14v2.5M5 19v-2.5M8 14v2.5M8 19v-2.5m-3 0h3m2-2.5h1.25m1.25 0h-1.25m0 0v5m3.25 0v-5l1.75 2.5L18 14v5m2-5v5h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 11V9l-7-7H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 2v5a2 2 0 0 0 2 2h5"
      />
    </svg>
  );
};
export default HtmlFile_02;

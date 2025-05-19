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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5 14v2.5M5 19v-2.5M8 14v2.5M8 19v-2.5m-3 0h3m2-2.5h1.25m1.25 0h-1.25m0 0v5m3.25 0v-5h.5l1.25 2.5L17.5 14h.5v5m2-5v5h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 22H2V2h9l7 7v2m-7-8.5V9h6.5"
      />
    </svg>
  );
};
export default HtmlFile_02;

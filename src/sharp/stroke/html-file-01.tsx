import React from "react";
const HtmlFile_01: React.FC<
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
        d="M5.5 17v2.5m0 0V22m0-2.5h-3m0-2.5v2.5m0 0V22M9 17v5m0-5H7.5M9 17h1.5m2 5v-5h.5l1.5 2.5L16 17h.5v5m2.5-5v5h2.5M19.5 14V9l-7-7h-9v12m9-11.5V9H19"
      />
    </svg>
  );
};
export default HtmlFile_01;

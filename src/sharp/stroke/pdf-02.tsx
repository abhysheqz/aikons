import React from "react";
const Pdf_02: React.FC<
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
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 14h-3v2.5m0 0V19m0-2.5h2.5M7 19v-2m0 0v-3h1.5a1.5 1.5 0 0 1 0 3zm5.5-3h1.286c.947 0 1.714.746 1.714 1.667v1.666c0 .92-.768 1.667-1.714 1.667H12.5z"
      />
    </svg>
  );
};
export default Pdf_02;

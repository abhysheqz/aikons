import React from "react";
const PaintBrush_04: React.FC<
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
        d="M6.494 15.012s0 3.495-2.494 6.99c0 0 9.478.499 11.972-3.995v3.995h3.99l-1.496-6.99"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.962 9.004V2.027a.01.01 0 0 1 .01-.01h4.973a.01.01 0 0 1 .01.01v6.977l5.037 3.034a.01.01 0 0 1 .005.009v2.957H5.037v-3.002a.01.01 0 0 1 .005-.008z"
      />
    </svg>
  );
};
export default PaintBrush_04;

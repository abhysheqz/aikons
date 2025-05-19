import React from "react";
const CursorMagicSelection_04: React.FC<
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
        d="m12.669 8.358 5.028 1.968c2.9 1.134 4.35 1.702 4.302 2.602s-1.561 1.313-4.588 2.138c-.901.246-1.352.369-1.664.68-.312.313-.435.764-.681 1.665-.825 3.026-1.238 4.54-2.138 4.588s-1.468-1.402-2.602-4.302l-1.968-5.028C7.17 9.633 6.576 8.115 7.345 7.345s2.288-.175 5.324 1.013Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4V2M5 5 3.5 3.5M4 9H2m3 4-1.5 1.5m11-11L13 5"
      />
    </svg>
  );
};
export default CursorMagicSelection_04;

import React from "react";
const TestTube: React.FC<
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
        d="M11 6.5C11 9 13 11 15.473 11c0 1.657 1.461 3 3.263 3C20.54 14 22 12.657 22 11s-1-3-3-3c0-2-1.5-4-3.62-4 0-1.543-.88-2-1.88-2S12 3 12 3 9 3 9 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 14s-1 1-2 1c-1.5 0-2-2-4-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 6h7M7 6v4.134a4 4 0 0 1-.359 1.655l-3.998 8.797A1 1 0 0 0 3.553 22h10.894a1 1 0 0 0 .91-1.414L11.36 11.79A4 4 0 0 1 11 10.134V6"
      />
    </svg>
  );
};
export default TestTube;

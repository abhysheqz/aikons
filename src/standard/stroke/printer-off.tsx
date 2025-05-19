import React from "react";
const PrinterOff: React.FC<
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
        strokeWidth={2}
        d="M18.5 11.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 18H3a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h3m9 0V3.5A1.5 1.5 0 0 0 15.5 2h-7c-.653 0-1.294.417-1.5 1m5.5 5H19a3 3 0 0 1 3 3v6a1 1 0 0 1-.293.707M17 17v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h9M2 2l20 20"
      />
    </svg>
  );
};
export default PrinterOff;

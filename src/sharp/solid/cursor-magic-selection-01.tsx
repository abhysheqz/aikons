import React from "react";
const CursorMagicSelection_01: React.FC<
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
        fill="currentColor"
        d="M13.5 3.5a6.77 6.77 0 0 0 4 4 6.77 6.77 0 0 0-4 4 6.77 6.77 0 0 0-4-4 6.77 6.77 0 0 0 4-4M17.5 2A2.54 2.54 0 0 0 19 3.5 2.54 2.54 0 0 0 17.5 5 2.54 2.54 0 0 0 16 3.5 2.54 2.54 0 0 0 17.5 2"
      />
      <path
        fill="currentColor"
        d="M10.285 5.387 5.625 1.25l-1.375 19 5.188-3.398 2.79 5.898 3.974-1.957-2.65-5.67 6.198-1.33-3.857-3.425a5.3 5.3 0 0 0-.986 1.653 1.5 1.5 0 0 1-2.814 0A5.27 5.27 0 0 0 8.98 8.907a1.5 1.5 0 0 1 0-2.814c.472-.174.91-.413 1.306-.706"
      />
    </svg>
  );
};
export default CursorMagicSelection_01;

import React from "react";
const CursorRectangleSelection_02: React.FC<
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
        d="m10.45 10.023 11.338 4.36a.33.33 0 0 1-.014.623l-4.92 1.64a.33.33 0 0 0-.209.209l-1.64 4.919a.33.33 0 0 1-.621.014L10.023 10.45a.33.33 0 0 1 .427-.427Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8.5v3M11.5 2h-3m0 16h1M18 4.5V4a2 2 0 0 0-2-2h-.5M2 4.5V4a2 2 0 0 1 2-2h.5m0 16H4a2 2 0 0 1-2-2v-.5m16-6v-1"
      />
    </svg>
  );
};
export default CursorRectangleSelection_02;

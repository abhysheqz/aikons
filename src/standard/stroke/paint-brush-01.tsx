import React from "react";
const PaintBrush_01: React.FC<
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
        d="m8.5 12.5 3 3M6 15l3 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.171 16.829 17.29 3.708a1 1 0 0 1 1.415 0L20.294 5.3a1 1 0 0 1 0 1.414L7.173 19.829A4 4 0 0 1 4.348 21H3v-1.343a4 4 0 0 1 1.171-2.828Z"
      />
    </svg>
  );
};
export default PaintBrush_01;

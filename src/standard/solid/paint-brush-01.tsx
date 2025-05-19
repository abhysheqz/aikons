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
        fill="currentColor"
        d="m20.989 4.1-1.585-1.587a1.747 1.747 0 0 0-2.472-.001l-8.679 8.68 4.056 4.056 8.68-8.678a1.747 1.747 0 0 0 0-2.47M11.248 16.309l-4.055-4.055-1.44 1.44 4.055 4.054zM8.748 18.809l-4.055-4.055-1.305 1.305A4.74 4.74 0 0 0 2 19.41v1.34c0 .414.336.75.75.75h1.343a4.74 4.74 0 0 0 3.35-1.388z"
      />
    </svg>
  );
};
export default PaintBrush_01;

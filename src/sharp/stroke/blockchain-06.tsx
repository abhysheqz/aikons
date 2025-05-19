import React from "react";
const Blockchain_06: React.FC<
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
        d="m5.5 6 3.303-1.887M5.5 6 2.197 4.113M5.5 6v3.714M5.5 2 9 4v4l-3.5 2L2 8V4zM18.5 6l-3.304-1.888M18.5 6l3.304-1.888M18.5 6v3.74m0-7.74L22 4v4l-3.5 2L15 8V4zM12 18l-3.33-1.903M12 18l3.33-1.903M12 18v3.738M12 14l3.5 2v4L12 22l-3.5-2v-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11.5 6h1M2 12v7h3.5M22 12v7h-3.5"
      />
    </svg>
  );
};
export default Blockchain_06;

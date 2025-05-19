import React from "react";
const StructureFolderCircle: React.FC<
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
        strokeWidth={1.5}
        d="M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 16v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1M10.503 1.997l-2.004.001a1 1 0 0 0-.999 1V9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4.983a1 1 0 0 0-1-1h-2.992L11.3 2.392a1 1 0 0 0-.798-.395Z"
      />
    </svg>
  );
};
export default StructureFolderCircle;

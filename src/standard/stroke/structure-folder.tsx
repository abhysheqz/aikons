import React from "react";
const StructureFolder: React.FC<
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
        d="M7 22a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zM21 22a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 17v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.501 1.997-2.004.001a1 1 0 0 0-.999 1V9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4.983a1 1 0 0 0-1-1h-2.992l-1.207-1.591a1 1 0 0 0-.798-.395Z"
      />
    </svg>
  );
};
export default StructureFolder;

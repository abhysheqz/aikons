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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 22v-5H2v5zM22 22v-5h-6v5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.995 16.892v-3.8a.1.1 0 0 1 .1-.1h13.816a.1.1 0 0 1 .1.1v3.8M10.528 1.996H7.604a.1.1 0 0 0-.1.1v7.81a.1.1 0 0 0 .1.1h8.822a.1.1 0 0 0 .1-.1V4.083a.1.1 0 0 0-.1-.1h-3.92z"
      />
    </svg>
  );
};
export default StructureFolderCircle;

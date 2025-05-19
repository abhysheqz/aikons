import React from "react";
const FileMinus: React.FC<
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
        fillRule="evenodd"
        d="M3.246 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.302 3.75a2.92 2.92 0 0 1 2.886-2.5h11.64a2.924 2.924 0 0 1 2.918 2.932v10.763a.98.98 0 0 1-.285.692l-6.808 6.828a.97.97 0 0 1-.687.285H6.163a2.924 2.924 0 0 1-2.917-2.936L3.264 8.25h8.982a2.25 2.25 0 0 0 0-4.5zm9.261 17.044L18.8 14.54h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileMinus;

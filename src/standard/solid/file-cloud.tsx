import React from "react";
const FileCloud: React.FC<
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
        d="M5.383 3.714C5.746 2.31 6.988 1.25 8.5 1.25c1.708 0 2.99 1.35 3.196 2.9 1.191.33 2.054 1.45 2.054 2.75 0 1.548-1.217 2.85-2.775 2.85H6.25c-1.682 0-3-1.406-3-3.083 0-1.377.885-2.568 2.133-2.953"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.562 1.25c.563.55.978 1.24 1.208 1.982A4.12 4.12 0 0 1 15 6.9c0 2.192-1.73 4.1-4.025 4.1H6.25a4.17 4.17 0 0 1-2.984-1.248L3.25 19.814a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932zm1.005 19.544 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileCloud;

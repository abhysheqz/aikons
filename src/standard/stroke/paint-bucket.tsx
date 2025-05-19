import React from "react";
const PaintBucket: React.FC<
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
        d="M20 12.5H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 20a2 2 0 1 1-4 0c0-1.105 2-3 2-3s2 1.895 2 3M9.6 2l1.98 1.983m0 0L20 12.411l-9 9.008a1.98 1.98 0 0 1-2.802 0L2.58 15.796a1.984 1.984 0 0 1 0-2.804z"
      />
    </svg>
  );
};
export default PaintBucket;

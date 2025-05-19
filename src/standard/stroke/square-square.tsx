import React from "react";
const SquareSquare: React.FC<
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
        d="M2.5 19.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 11h.5c.455 0 .928.268 1.132.691L9.5 13.5m0 0 .868 1.809c.204.424.678.691 1.132.691h.5m-2.5-2.5L8.42 15a2.37 2.37 0 0 1-1.92 1m3-2.5 1.08-1.5a2.37 2.37 0 0 1 1.92-1m5 1H15l2-1.6c.315-.252.5-.647.5-1.067C17.5 8.597 16.94 8 16.25 8S15 8.597 15 9.333"
      />
    </svg>
  );
};
export default SquareSquare;

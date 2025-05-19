import React from "react";
const SquareArrowDataTransferDiagonal: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm10.03 4.72a.75.75 0 0 1 0 1.06l-6 6A.75.75 0 0 1 7.25 13v-3a.75.75 0 0 1 1.5 0v1.19l4.72-4.72a.75.75 0 0 1 1.06 0m1.757 3.837a.75.75 0 0 1 .463.693v3a.75.75 0 0 1-1.5 0v-1.19l-4.72 4.72a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 .816-.163"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDataTransferDiagonal;

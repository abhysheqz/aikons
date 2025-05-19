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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.53 11.28 6-6-1.06-1.06-4.72 4.72V9h-1.5v4a.75.75 0 0 0 1.28.53M16.75 11a.75.75 0 0 0-1.28-.53l-6 6 1.06 1.06 4.72-4.72V15h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDataTransferDiagonal;

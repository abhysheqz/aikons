import React from "react";
const ArrowDataTransferDiagonal: React.FC<
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
        d="M20.405 8.086A1 1 0 0 1 21 9v5a1 1 0 1 1-2 0v-2.74l-9.327 8.48a1 1 0 1 1-1.346-1.48l11-10a1 1 0 0 1 1.078-.175M3.595 15.915A1 1 0 0 1 3 15v-5a1 1 0 0 1 2 0v2.74l9.327-8.48a1 1 0 0 1 1.346 1.48l-11 10a1 1 0 0 1-1.078.175"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDataTransferDiagonal;

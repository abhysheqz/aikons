import React from "react";
const SquareArrowDataTransferHorizontal: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.53 5.72a.75.75 0 0 1 0 1.06l-.72.72h7.188a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.53-1.28l2.002-2a.75.75 0 0 1 1.06 0M6.749 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .53 1.28l-1.997 2a.75.75 0 0 1-1.062-1.06l.72-.72h-7.19a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDataTransferHorizontal;

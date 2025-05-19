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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.912 4.781-2 2.5a.75.75 0 0 0 .586 1.219h9v-1.5h-7.44l1.026-1.282zm7.586 6.219h-9v1.5h7.44l-1.026 1.281 1.172.937 2-2.5a.75.75 0 0 0-.586-1.218"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDataTransferHorizontal;

import React from "react";
const ReceiptDollar: React.FC<
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
        d="M6 1.25A2.75 2.75 0 0 0 3.25 4v17.5a.75.75 0 0 0 1.085.67L7.96 20.36l3.643 2.277a.75.75 0 0 0 .796 0l3.643-2.277 3.624 1.812a.75.75 0 0 0 1.085-.671V4A2.75 2.75 0 0 0 18 1.25zM12.75 6a.75.75 0 0 0-1.5 0v.75h-.75A2.25 2.25 0 0 0 8.25 9v.5a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0 2.25 2.25 0 0 0 2.25 2.25h.75V16a.75.75 0 0 0 1.5 0v-.75h.75A2.25 2.25 0 0 0 15.75 13v-.5a2.25 2.25 0 0 0-2.25-2.25h-3a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75.75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-2.25-2.25h-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ReceiptDollar;

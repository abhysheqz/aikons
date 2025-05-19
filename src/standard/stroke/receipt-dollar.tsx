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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 21.5V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v17.5l4-2 4 2.5 4-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.5h1.5A1.5 1.5 0 0 1 15 9m-3-1.5h-1.5A1.5 1.5 0 0 0 9 9v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H12m0-7V6m0 8.5h-1.5A1.5 1.5 0 0 1 9 13m3 1.5V16"
      />
    </svg>
  );
};
export default ReceiptDollar;

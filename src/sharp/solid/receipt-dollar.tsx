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
        d="M20.75 1.25H3.25v21.409l4.737-2.913 4.012 3.004 4.036-3.004 4.715 2.917zm-11 8.5v-2h6v-1.5h-3v-1.5h-1.5v1.5h-3v5h6v2h-6v1.5h3v1.5h1.5v-1.5h3v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ReceiptDollar;

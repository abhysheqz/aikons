import React from "react";
const TransactionHistory: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 10.5V10c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2 5.343 2 4.172 3.172 3 6.229 3 10v4.5c0 3.287 0 4.931.908 6.038q.25.304.554.554C5.57 22 7.212 22 10.5 22M7 7h8m-8 4h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 18.5-1.5-.55V15.5m-4.5 2a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
      />
    </svg>
  );
};
export default TransactionHistory;

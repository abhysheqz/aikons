import React from "react";
const Transaction: React.FC<
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
        d="M12 6.5V8m0 0c-1.519 0-2.75.929-2.75 2.074 0 1.146.75 1.778 2.75 1.778s3 .592 3 2.074S13.657 16 12 16m0-8c1.519 0 2.75.929 2.75 2.074M12 16v1.5m0-1.5c-1.657 0-3-.928-3-2.074"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12l3-1.5M9 21.542A10 10 0 0 1 7.634 21M5.5 19.6a10 10 0 0 1-1.1-1.1m-1.332-2a10 10 0 0 1-.61-1.5"
      />
    </svg>
  );
};
export default Transaction;

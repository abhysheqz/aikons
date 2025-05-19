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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 4A2.75 2.75 0 0 1 5 1.25h12A2.75 2.75 0 0 1 19.75 4v7.87a6.5 6.5 0 0 0-7.083 10.88H5A2.75 2.75 0 0 1 2.25 20zM7 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 12.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m.75 3.25a.75.75 0 0 0-1.5 0v2.45a.75.75 0 0 0 .492.704l1.5.55a.75.75 0 0 0 .516-1.408l-1.008-.37z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransactionHistory;

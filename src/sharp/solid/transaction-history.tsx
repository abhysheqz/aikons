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
        d="M2.25 1.25h17.5v10.62a6.5 6.5 0 0 0-7.083 10.88H2.25zm13.5 5h-9.5v1.5h9.5zm-4 4h-5.5v1.5h5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 12.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m1.946 7.212.516-1.408-1.712-.628V14.75h-1.5v3.724z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransactionHistory;

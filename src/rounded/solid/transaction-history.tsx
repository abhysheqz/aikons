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
        d="M11.056 1.25c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v1.926a6.5 6.5 0 0 0-7.09 10.876q-.747.005-1.603.004c-1.838 0-3.407 0-4.546-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.708-.153 4.545-.153M7 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
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

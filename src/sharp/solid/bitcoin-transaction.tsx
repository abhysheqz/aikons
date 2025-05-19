import React from "react";
const BitcoinTransaction: React.FC<
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
        d="M12 4a8 8 0 0 0-1.779.198l-.442-1.95A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-2.4 6.5h1.9v2h-5.523V15h2v2.318A8 8 0 0 0 12 4m-9.5-.484H8V9H6V6.708a8 8 0 0 0 7.779 13.094l.442 1.95c-.715.163-1.459.248-2.221.248-5.523 0-10-4.477-10-10 0-2.475.9-4.74 2.387-6.484H2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 7v1.333h.563c1.13 0 1.937.958 1.937 2V11c0 .355-.093.7-.261 1 .168.3.261.645.261 1v.667c0 1.043-.808 2-1.937 2H13V17h-2v-1.333H8.5v-2h.938v-3.334H8.5v-2H11V7zm-1.562 3.333V11H13.5v-.667zm0 2.667v.667H13.5V13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinTransaction;

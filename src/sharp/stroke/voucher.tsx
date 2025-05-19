import React from "react";
const Voucher: React.FC<
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
        d="M4.563 5.558 7.4 8m0 0 3.6 3M7.4 8l-2.895 2.386M7.4 8 11 5m-9-.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm0 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM8 16v-3m11-6h3v3m0 8v3h-3m-8 0H8v-3m5 3h4m5-5v-4m-5-5h-4"
      />
    </svg>
  );
};
export default Voucher;

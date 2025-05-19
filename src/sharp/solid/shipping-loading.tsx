import React from "react";
const ShippingLoading: React.FC<
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
        d="M18.5 16.5h-17V15h17a3.75 3.75 0 1 1 0 7.5h-17V21h17a2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.253 15.781a.97.97 0 0 1-.969.969H4.722a.97.97 0 0 1-.97-.969V5.865L6.06 1.25h10.885l2.308 4.615zM7.257 3.188l-.969 1.937h10.428l-.97-1.937zM9.999 9.75h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 16.75h-17v-2h17a4 4 0 1 1 0 8h-17v-2h17a2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.504 18.75a1 1 0 0 1 1-1h.008a1 1 0 0 1 0 2h-.009a1 1 0 0 1-1-1m5.996 0a1 1 0 0 1 1-1h.008a1 1 0 0 1 0 2H11.5a1 1 0 0 1-.999-1m5.996 0a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2h-.01a1 1 0 0 1-.999-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShippingLoading;

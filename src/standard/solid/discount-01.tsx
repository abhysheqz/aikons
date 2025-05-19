import React from "react";
const Discount_01: React.FC<
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
        d="M1 4a3 3 0 0 1 3-3h4.5a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v4.5a1 1 0 0 1-2 0zm12.5-2a1 1 0 0 1 1-1H19a3 3 0 0 1 3 3v4.5a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-4.5a1 1 0 0 1-1-1M2 13.5a1 1 0 0 1 1 1V19a1 1 0 0 0 1 1h4.5a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-4.5a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1V19a3 3 0 0 1-3 3h-4.5a1 1 0 1 1 0-2H19a1 1 0 0 0 1-1v-4.5a1 1 0 0 1 1-1M6 7.5A1.5 1.5 0 0 1 7.5 6h.009a1.5 1.5 0 1 1 0 3h-.01A1.5 1.5 0 0 1 6 7.5m7.99 8a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 0 3h-.01a1.5 1.5 0 0 1-1.5-1.5M16.207 6.793a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Discount_01;

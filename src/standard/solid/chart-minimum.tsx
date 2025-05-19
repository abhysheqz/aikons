import React from "react";
const ChartMinimum: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.365 10.3C18.356 8.481 19 5.902 19 3a1 1 0 1 1 2 0c0 3.172-.7 6.093-1.88 8.257C17.96 13.383 16.194 15 14 15s-3.96-1.617-5.12-3.743C7.7 9.093 7 6.172 7 3a1 1 0 1 1 2 0c0 2.903.644 5.482 1.635 7.3C11.647 12.153 12.881 13 14 13s2.353-.846 3.365-2.7M5 17a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.999 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartMinimum;

import React from "react";
const ChartMaximum: React.FC<
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
        d="M5 6a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.999 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m2.998 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M9.652 12.962C8.649 14.967 8 17.808 8 21a1 1 0 1 1-2 0c0-3.435.694-6.595 1.863-8.932C9.002 9.79 10.76 8 13 8s3.998 1.79 5.137 4.068C19.306 14.405 20 17.565 20 21a1 1 0 1 1-2 0c0-3.192-.65-6.033-1.652-8.038C15.316 10.897 14.074 10 13 10s-2.316.897-3.348 2.962"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartMaximum;

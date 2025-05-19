import React from "react";
const Chart: React.FC<
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
        d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M17 15a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1M5 9a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M3 4a3 3 0 1 1 5.978.366l6.951 3.463a3 3 0 1 1-.905 1.784L8.087 6.156A3 3 0 0 1 3 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chart;

import React from "react";
const ChartMedium: React.FC<
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
        d="M11 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.993 6c-.89 0-1.539.52-2.136 1.515a1 1 0 1 1-1.714-1.03C5.893 5.237 7.072 4 8.993 4c.922 0 1.717.236 2.387.685.66.441 1.138 1.05 1.502 1.706.669 1.21 1.034 2.766 1.361 4.162l.051.218c.362 1.536.7 2.872 1.281 3.838.28.463.593.8.956 1.024.357.22.817.367 1.45.367.9 0 1.545-.524 2.17-1.528a1 1 0 1 1 1.698 1.056C21.085 16.755 19.913 18 17.982 18c-.963 0-1.795-.229-2.502-.665-.7-.432-1.22-1.032-1.618-1.694-.774-1.284-1.17-2.948-1.514-4.412l-.018-.075c-.357-1.519-.667-2.834-1.198-3.795-.26-.468-.544-.798-.865-1.013C9.957 6.14 9.557 6 8.993 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartMedium;

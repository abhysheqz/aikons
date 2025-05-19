import React from "react";
const BitcoinSearch: React.FC<
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
        d="M1 11C1 5.477 5.477 1 11 1s10 4.477 10 10a9.96 9.96 0 0 1-2.257 6.329l3.964 3.964a1 1 0 0 1-1.414 1.414l-3.964-3.964A9.96 9.96 0 0 1 11 21C5.477 21 1 16.523 1 11m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 4a1 1 0 1 0-2 0H8.5a1 1 0 0 0 0 2v4a1 1 0 1 0 0 2H10a1 1 0 1 0 2 0 2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4m-1.5 3V9H12a.5.5 0 0 1 0 1zm0 2H12a.5.5 0 0 1 0 1h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSearch;

import React from "react";
const StoreRemove_01: React.FC<
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
        d="M20.5 9.5a1 1 0 0 1 1 1V13a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1m-18 10v-9h2v9a1 1 0 0 0 1 1H13a1 1 0 1 1 0 2H5.5a3 3 0 0 1-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.82 11.267c1.238 1.026 2.675 1.173 4.009.797 1.472-.416 2.815-1.457 3.749-2.586a.75.75 0 0 0 .139-.699l-1.783-5.794a1.75 1.75 0 0 0-1.673-1.235H4.74a1.75 1.75 0 0 0-1.673 1.235L1.283 8.78a.75.75 0 0 0 .1.648c.663.956 1.948 2.378 3.749 2.702.939.169 2.6.215 3.974-.854.94.718 2.578 1.408 4.52.643a5.2 5.2 0 0 0 1.195-.651M5.5 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M15.793 15.793a1 1 0 0 1 1.414 0L19 17.586l1.793-1.793a1 1 0 0 1 1.414 1.414L20.414 19l1.793 1.793a1 1 0 0 1-1.414 1.414L19 20.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L17.586 19l-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StoreRemove_01;

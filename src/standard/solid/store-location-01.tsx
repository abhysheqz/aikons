import React from "react";
const StoreLocation_01: React.FC<
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
        d="M18.5 12.75c-2.334 0-4.25 1.86-4.25 4.184 0 1.306.626 2.365 1.364 3.242.484.575 1.084 1.14 1.633 1.66.258.243.504.476.723.694a.75.75 0 0 0 1.06 0c.225-.224.481-.465.75-.716.541-.508 1.131-1.061 1.604-1.62.742-.874 1.366-1.934 1.366-3.26 0-2.324-1.916-4.184-4.25-4.184m0 5.75a1.5 1.5 0 0 1 0-3h.009a1.5 1.5 0 0 1 0 3zM2.5 19v-9h2v9a1 1 0 0 0 1 1H13a1 1 0 1 1 0 2H5.5a3 3 0 0 1-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.82 10.767c1.238 1.026 2.675 1.173 4.009.797 1.472-.416 2.815-1.457 3.749-2.586a.75.75 0 0 0 .139-.699l-1.783-5.794a1.75 1.75 0 0 0-1.673-1.235H4.74a1.75 1.75 0 0 0-1.673 1.235L1.283 8.28a.75.75 0 0 0 .1.648c.663.956 1.948 2.378 3.749 2.702.939.169 2.6.215 3.974-.854.94.718 2.578 1.408 4.52.643a5.2 5.2 0 0 0 1.195-.651M5.5 17.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StoreLocation_01;

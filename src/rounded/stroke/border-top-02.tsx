import React from "react";
const BorderTop_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.753 17.666c.193 1.049.535 1.82 1.14 2.43s1.37.955 2.409 1.15M2.507 10q-.006.883-.005 1.916-.001 1.034.005 1.917m7.595 7.662q.875.006 1.9.005 1.024.001 1.9-.005m3.8-.249c1.039-.195 1.804-.54 2.408-1.15.605-.61.947-1.381 1.14-2.43M21.497 10q.006.884.005 1.916.001 1.034-.005 1.917M2.5 6.5c.198-1.094.55-1.9 1.17-2.536C5.1 2.5 7.4 2.5 12 2.5s6.9 0 8.329 1.464c.621.637.972 1.442 1.17 2.536"
      />
    </svg>
  );
};
export default BorderTop_02;

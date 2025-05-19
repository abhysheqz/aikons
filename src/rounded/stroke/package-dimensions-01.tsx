import React from "react";
const PackageDimensions_01: React.FC<
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
        d="M15.5 7.5h-2c-2.828 0-4.243 0-5.121.879C7.5 9.257 7.5 10.672 7.5 13.5v2c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h2c2.828 0 4.243 0 5.121-.879.879-.878.879-2.293.879-5.121v-2c0-2.828 0-4.243-.879-5.121C19.743 7.5 18.328 7.5 15.5 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7.5h-3v3c0 .471 0 .707.146.854.147.146.383.146.854.146h1c.471 0 .707 0 .854-.146.146-.147.146-.383.146-.854zM10.5 18.5h3M7.5 3.5h14m-14 0v-1m0 1v1m14-1v-1m0 1v1M3.5 7.5v14m0-14h1m-1 0h-1m1 14h1m-1 0h-1"
      />
    </svg>
  );
};
export default PackageDimensions_01;

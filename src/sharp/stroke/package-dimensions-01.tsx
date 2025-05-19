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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 7.5h-14v14h14z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 7.5h-3v4h3zM10.5 18.5h3M7.5 3.5h14m-14 0v-1m0 1v1m14-1v-1m0 1v1M3.5 7.5v14m0-14h1m-1 0h-1m1 14h1m-1 0h-1"
      />
    </svg>
  );
};
export default PackageDimensions_01;

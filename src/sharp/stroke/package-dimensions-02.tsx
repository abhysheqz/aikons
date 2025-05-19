import React from "react";
const PackageDimensions_02: React.FC<
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
        d="m21 9-7-3-7 3m14 0-7 3m7-3v10l-7 3m0-10L7 9m7 3v10M7 9v10l7 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.5 13v-2.5l6.187-2.855M7 3h14M7 3V2m0 1v1m14-1V2m0 1v1M4 7v14M4 7h1M4 7H3m1 14h1m-1 0H3"
      />
    </svg>
  );
};
export default PackageDimensions_02;

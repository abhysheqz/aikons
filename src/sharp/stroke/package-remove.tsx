import React from "react";
const PackageRemove: React.FC<
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
        d="m11 10 9-4-9-4-9 4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 4-9 4M5 12l2 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 15 3 3m0 0 3 3m-3-3-3 3m3-3 3-3M2.005 6.002v12l8.942 3.99a.1.1 0 0 0 .081 0l2.471-1.1m-2.515-10.844V21.42M20 6v6.994"
      />
    </svg>
  );
};
export default PackageRemove;

import React from "react";
const PackageSearch: React.FC<
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
        d="m15.5 4-9 4M5 12l2 1M20.4 20.4 22 22m-.8-4.4a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.005 6.002v12l8.942 3.99a.1.1 0 0 0 .081 0l2.471-1.1m-2.515-10.844V21.42M20 6v6.994"
      />
    </svg>
  );
};
export default PackageSearch;

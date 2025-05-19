import React from "react";
const PackageOpen: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.625 6.5 21 8l-9 4-9-4 3.375-1.5M6 13.5l2 1M12 2v3m4-2-1.5 3M8 3l1.5 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3 8.001.074 9.986 8.897 4.005a.1.1 0 0 0 .082 0L21 17.974V8.016m-8.988 4.023v9.451"
      />
    </svg>
  );
};
export default PackageOpen;

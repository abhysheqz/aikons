import React from "react";
const PackageReceive: React.FC<
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
        d="m16.5 6.002 4.5 2-9 4.002-9-4.002 4.5-2M6 13.505l2 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 8.002v9.993L11.971 22a.1.1 0 0 0 .082 0L21 18.013V8.017m-8.988 4.024v9.456"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.002 2.01v6.45m2.495-1.955-2.495 2.498L9.504 6.5"
      />
    </svg>
  );
};
export default PackageReceive;

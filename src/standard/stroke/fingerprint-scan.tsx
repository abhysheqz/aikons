import React from "react";
const FingerprintScan: React.FC<
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
        d="M16.5 15.5V11a4.5 4.5 0 1 0-9 0v4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 12.5V11a1.5 1.5 0 0 0-3 0v5.5m3-1v2M15 2.5h4.5a2 2 0 0 1 2 2V9M9 2.5H4.5a2 2 0 0 0-2 2V9M9 21.5H4.5a2 2 0 0 1-2-2V15M15 21.5h4.5a2 2 0 0 0 2-2V15"
      />
    </svg>
  );
};
export default FingerprintScan;

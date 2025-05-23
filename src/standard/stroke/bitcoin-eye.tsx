import React from "react";
const BitcoinEye: React.FC<
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
        d="M12 10c6 0 10 6 10 6s-4 6-10 6-10-6-10-6 4-6 10-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 13.5V16m0 0v2.5m0-2.5h1.75M12 13.5v-1m0 6.125v.875m-2-6h2.75a1.25 1.25 0 1 1 0 2.5m0 0a1.25 1.25 0 1 1 0 2.5H10M18.5 3l-2 2v3m1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M12 3v4m-1-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 3l2 2v3m-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
export default BitcoinEye;

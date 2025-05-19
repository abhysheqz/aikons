import React from "react";
const CloudSavingDone_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M5.603 7.115A5.75 5.75 0 0 0 1 12.75c0 2.977 2.265 5.457 5.176 5.746q.038.004.074.004h.012a2.5 2.5 0 0 1 4.255-1.518l.138.137 2.737-3.041a2.5 2.5 0 1 1 3.716 3.344l-.97 1.078h1.612a1 1 0 0 0 .082-.005c2.632-.29 4.668-2.548 4.668-5.245a5.255 5.255 0 0 0-4.503-5.197 6.25 6.25 0 0 0-12.394-.938m10.39 9.304a1 1 0 1 0-1.486-1.338l-3.795 4.217-1.255-1.255a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.45-.038z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CloudSavingDone_01;

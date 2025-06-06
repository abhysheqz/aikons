import React from "react";
const BitcoinPresentation: React.FC<
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
        d="M12 18.25v3M2 2.75h20M3 3.25v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-13M14 8.75h2m-2 4h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 7.75h1m2.5 3H7m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3v-3m0 3v3m-1 0h1m0-6h1.5m-1.5 6h1.5m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinPresentation;

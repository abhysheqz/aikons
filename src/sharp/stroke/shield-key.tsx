import React from "react";
const ShieldKey: React.FC<
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
        d="m17 10-2-2-2 2m-2 2 2-2m0 0 1.5 1.5m-3.942 3.061c-.59.59-1.533.582-2.115 0a1.5 1.5 0 0 1-.006-2.121 1.506 1.506 0 0 1 2.127 0 1.5 1.5 0 0 1-.006 2.121Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11V5c-5-.5-9-3-9-3S8 4.5 3 5v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
    </svg>
  );
};
export default ShieldKey;

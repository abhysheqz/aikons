import React from "react";
const FlipRight: React.FC<
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
        d="M17.017 2.999h-1.994m1.994 18.003h-1.994M19.01 2.999H22V6m0 12v3.002l-2.99-.017M22 8v3m0 2v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.99 20.998.105-17.94-9.98-.06a.01.01 0 0 0-.01.01L2 20.928q0 .01.01.01z"
      />
    </svg>
  );
};
export default FlipRight;

import React from "react";
const Cashier_02: React.FC<
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
        d="M10 18.5h4M16.5 5.5v3m-1.5-6h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.557 16.839 2.472-7.005A2 2 0 0 1 6.915 8.5h10.17a2 2 0 0 1 1.886 1.334l2.472 7.005a1 1 0 0 1 .057.332V21.5h-19v-4.329a1 1 0 0 1 .057-.332Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.5m3.25 0h.5m3.25 0h.5M7 15h1m3.5 0h1m3.5 0h1"
      />
    </svg>
  );
};
export default Cashier_02;

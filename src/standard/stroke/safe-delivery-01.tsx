import React from "react";
const SafeDelivery_01: React.FC<
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
        d="M18 12h-8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M13 5h2M4 14h2.486a2 2 0 0 1 .964.248l2.05 1.127h1c1.5 0 2.5 1.149 2.5 2.125l-2.684.894a1 1 0 0 1-.632 0L7 17.5m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155v0a.877.877 0 0 1-.422 1.11l-7.585 3.792a2 2 0 0 1-1.44.136L4 20.019"
      />
    </svg>
  );
};
export default SafeDelivery_01;

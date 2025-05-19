import React from "react";
const DeliveryDelay_02: React.FC<
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
        strokeWidth={1.5}
        d="M19.5 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9.5 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12v7.5h2.5m10 0h-5M15 18V6h-4m4.5 2.5H19l3 4.5v6.5h-2.5M8 8 6.5 6.95V4M2 6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Z"
      />
    </svg>
  );
};
export default DeliveryDelay_02;

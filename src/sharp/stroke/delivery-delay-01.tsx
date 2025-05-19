import React from "react";
const DeliveryDelay_01: React.FC<
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
        d="M14.5 19.5h-5m10 0H22V15a6.5 6.5 0 0 0-6.5-6.5M11 6h4v12M2 12v7.488l2.5.012M8 8 6.5 6.95V4M2 6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Z"
      />
    </svg>
  );
};
export default DeliveryDelay_01;

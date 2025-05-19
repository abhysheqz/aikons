import React from "react";
const ShippingTruck_01: React.FC<
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
        d="M19.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 17.5h-5m10 0H22V13c0-3.59-3-6.5-7-6.5m0 9.5V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11.495a1 1 0 0 0 1.005 1l1.495-.007"
      />
    </svg>
  );
};
export default ShippingTruck_01;

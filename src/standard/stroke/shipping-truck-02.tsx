import React from "react";
const ShippingTruck_02: React.FC<
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
        d="M14.5 17.5h-5M15 16V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1h1.5M15 6.5h2.93a2 2 0 0 1 1.664.89l2.07 3.106a2 2 0 0 1 .336 1.11V17.5h-2.5"
      />
    </svg>
  );
};
export default ShippingTruck_02;

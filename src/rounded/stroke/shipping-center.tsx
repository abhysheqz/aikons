import React from "react";
const ShippingCenter: React.FC<
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
      <rect
        width={20}
        height={6}
        x={2}
        y={15}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={3}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 9c0-2.828 0-4.243.879-5.121C7.757 3 9.172 3 12 3s4.243 0 5.121.879C18 4.757 18 6.172 18 9s0 4.243-.879 5.121C16.243 15 14.828 15 12 15s-4.243 0-5.121-.879C6 13.243 6 11.828 6 9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 18h.008M7 18h.009m9.982 0H17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 6h3"
      />
    </svg>
  );
};
export default ShippingCenter;

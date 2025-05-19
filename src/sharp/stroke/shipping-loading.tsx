import React from "react";
const ShippingLoading: React.FC<
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
        d="M5 16V6h14v10z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5 6 2-4h10l2 4M10.5 9h3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 16h17a3 3 0 1 1 0 6H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 19h.009M12 19h.009M6 19h.009"
      />
    </svg>
  );
};
export default ShippingLoading;

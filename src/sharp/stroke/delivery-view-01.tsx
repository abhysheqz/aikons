import React from "react";
const DeliveryView_01: React.FC<
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
        d="M22 14V8H2v14h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 8 3-6h14l3 6M12 8V2M9 12h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 18.5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 22c2.761 0 5-3.5 5-3.5S19.761 15 17 15s-5 3.5-5 3.5 2.239 3.5 5 3.5Z"
      />
    </svg>
  );
};
export default DeliveryView_01;

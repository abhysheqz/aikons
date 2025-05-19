import React from "react";
const DeliveryTracking_01: React.FC<
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
        d="M22 10V8H2v14h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 8 3-6h14l3 6M12 8V2M9 12h3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 12c-2.21 0-4 1.809-4 4.04 0 1.276.5 2.268 1.5 3.155.705.624 1.987 1.964 2.5 2.805.539-.824 1.795-2.18 2.5-2.805 1-.887 1.5-1.879 1.5-3.155C22 13.81 20.21 12 18 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 16h.009"
      />
    </svg>
  );
};
export default DeliveryTracking_01;

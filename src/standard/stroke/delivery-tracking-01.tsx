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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8v12a2 2 0 0 0 2 2h8M22 8v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.447 3.106 2 8h20l-2.447-4.894A2 2 0 0 0 17.763 2H6.237a2 2 0 0 0-1.789 1.106Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 8V2" />
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 12H12"
      />
    </svg>
  );
};
export default DeliveryTracking_01;

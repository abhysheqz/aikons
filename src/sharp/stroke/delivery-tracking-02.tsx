import React from "react";
const DeliveryTracking_02: React.FC<
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
        d="M3 7.64v13.332h9.5M21 7.64v2.051"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9.5 10.5h3" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 11.743c-2.21 0-4 1.855-4 4.143 0 1.309.5 2.326 1.5 3.235.705.64 1.987 2.015 2.5 2.877.539-.845 1.795-2.236 2.5-2.877 1-.909 1.5-1.926 1.5-3.235 0-2.288-1.79-4.143-4-4.143Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 15.5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.9 2H2.1c-.055 0-.1.046-.1.103v5.025h20V2.103A.1.1 0 0 0 21.9 2Z"
      />
    </svg>
  );
};
export default DeliveryTracking_02;

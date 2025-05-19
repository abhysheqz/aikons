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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 19.5h-5m10 0H22V15c0-3.59-3-6.5-7-6.5M11 6h3a1 1 0 0 1 1 1v11M4.5 19.488l-1.495.007a1 1 0 0 1-1.005-1V12.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.5 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9.5 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 7.5-1-.5V5M2 6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
      />
    </svg>
  );
};
export default DeliveryDelay_01;

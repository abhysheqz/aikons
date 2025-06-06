import React from "react";
const DeliveryDelay_02: React.FC<
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
        d="M11 6h3a1 1 0 0 1 1 1v11m-.5 1.5h-5m5.5-11h2.93a2 2 0 0 1 1.664.89l2.07 3.106a2 2 0 0 1 .336 1.11V19.5h-2.5m-15 0H3a1 1 0 0 1-1-1V13"
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
export default DeliveryDelay_02;

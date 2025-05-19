import React from "react";
const DeliveryTruck_02: React.FC<
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
        d="M9.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM19.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h6m-6 3h4M2 4h12a1 1 0 0 1 1 1v11m-.5 1.5h-5m5.5-11h2.93a2 2 0 0 1 1.664.89l2.07 3.106a2 2 0 0 1 .336 1.11V17.5h-2.5m-15 0H3a1 1 0 0 1-1-1V13"
      />
    </svg>
  );
};
export default DeliveryTruck_02;

import React from "react";
const Taxi_02: React.FC<
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
        d="M19 20v-2H5v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4.894a2 2 0 0 1 .336-1.11L4 11.5l1.987-4.77A2 2 0 0 1 7.833 5.5h8.334a2 2 0 0 1 1.846 1.23L20 11.5l1.664 2.496a2 2 0 0 1 .336 1.11V20a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5.5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5M2 10l2 1.5 2 .5h12l2-.5 2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 15v.01M6 15v.01"
      />
    </svg>
  );
};
export default Taxi_02;

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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 10.55h4M3 7.5v11a2 2 0 0 0 2 2h6.5m9.5-13v3M22 6.5v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 13c-1.933 0-3.5 1.538-3.5 3.434 0 1.085.438 1.928 1.313 2.681.616.531 1.738 1.67 2.187 2.385.471-.7 1.57-1.854 2.188-2.385.875-.753 1.312-1.596 1.312-2.68C21 14.537 19.433 13 17.5 13Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 16.5h.009"
      />
    </svg>
  );
};
export default DeliveryTracking_02;

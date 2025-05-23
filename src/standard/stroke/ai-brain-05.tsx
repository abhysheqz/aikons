import React from "react";
const AiBrain_05: React.FC<
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
        d="M7.5 4.5a3 3 0 0 0-2.567 4.554 3.001 3.001 0 0 0 0 5.893M7.5 4.5a2.5 2.5 0 0 1 5 0V6m-5-1.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 0 7.5 19.5a2.5 2.5 0 0 0 5 0V18m-7.567-3.054A3 3 0 0 1 6.5 13.67M18.5 9h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M15 15v1.5m3-1.5v1.5m-3-9V9m3-1.5V9m-4.5 1.5H12m1.5 3H12m9-3h-1.5m1.5 3h-1.5"
      />
    </svg>
  );
};
export default AiBrain_05;

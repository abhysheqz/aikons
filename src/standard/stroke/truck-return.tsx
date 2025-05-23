import React from "react";
const TruckReturn: React.FC<
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
        d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.002 11h3v6a1 1 0 0 1-1 1h-2m-4 0h-6M8 11h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1l.002 12a1 1 0 0 0 1 1h2M14 6h3.868a2 2 0 0 1 1.715.971L22 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 9-2 2.001L10 13"
      />
    </svg>
  );
};
export default TruckReturn;

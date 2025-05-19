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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 11h5v7h-3m-4 0H9m-2.002-7h6.946V4H1.998L2 18h3M14 6h5l3 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.501 8.501-2.504 2.5 2.504 2.5"
      />
    </svg>
  );
};
export default TruckReturn;

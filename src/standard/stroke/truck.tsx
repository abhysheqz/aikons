import React from "react";
const Truck: React.FC<
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
      <circle
        cx={17}
        cy={18}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M13 18h2M13 7h4.039a2 2 0 0 1 1.561.75l2.962 3.702a2 2 0 0 1 .438 1.25V17a1 1 0 0 1-1 1h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18h4V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2M13 7l1.972 3.902A2 2 0 0 0 16.757 12H21.5"
      />
    </svg>
  );
};
export default Truck;

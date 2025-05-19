import React from "react";
const AtomicPower: React.FC<
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
        d="M20.663 8.85c.59-2.04.424-3.81-.64-4.874-2.249-2.249-7.664-.48-12.096 3.951A22 22 0 0 0 6.6 9.377m10.8 5.247q-.617.736-1.327 1.449c-4.432 4.431-9.847 6.2-12.097 3.95-1.14-1.14-1.248-3.095-.498-5.323"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m12.45 9.3-1.8 2.7h2.7l-1.8 2.7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17.706a22 22 0 0 1-1.823-1.633c-4.431-4.432-6.2-9.847-3.95-12.097 1.14-1.14 3.095-1.248 5.323-.498m4.95 16.883c2.413.92 4.557.88 5.774-.337 2.249-2.25.48-7.665-3.951-12.097a22 22 0 0 0-1.823-1.633"
      />
    </svg>
  );
};
export default AtomicPower;

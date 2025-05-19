import React from "react";
const Van: React.FC<
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
        d="m12 5.5 1.072 3.575a2 2 0 0 0 1.916 1.425H20.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 5.5h13a2 2 0 0 1 1.6.8L19 9.5l2.11 1.406A2 2 0 0 1 22 12.57v2.93a1 1 0 0 1-1 1h-2M3 5.5l1 2c-1 2-2 4-2 8l1.577.789a2 2 0 0 0 .896.211H5m4 0h6"
      />
      <circle
        cx={17}
        cy={16.5}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={7}
        cy={16.5}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Van;

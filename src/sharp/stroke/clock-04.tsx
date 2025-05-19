import React from "react";
const Clock_04: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2C7.522 2 3.774 4.943 2.5 9h3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 7v5l2.5 2.5" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12q0 .505.045 1M9 22a10 10 0 0 1-1-.392M3.21 17a11 11 0 0 1-.515-1.154m2.136 3.46q.46.495.977.923"
      />
    </svg>
  );
};
export default Clock_04;

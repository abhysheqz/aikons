import React from "react";
const Tractor: React.FC<
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
        d="M16 18h-2.15q.149-.728.15-1.5a7.5 7.5 0 0 0-12.001-6"
      />
      <circle
        cx={6.5}
        cy={16.5}
        r={4.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={19}
        cy={18}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 8 8 2v5.5M21 12h-2M13 13V8l-1.5-5M4 9.5V3M2 3h11.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 9.5V6h2M7 9V3"
      />
    </svg>
  );
};
export default Tractor;

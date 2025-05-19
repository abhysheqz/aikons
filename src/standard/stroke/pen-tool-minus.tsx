import React from "react";
const PenToolMinus: React.FC<
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
        d="M10.602 15.398 5 21m5-7c.042.471.181.982.6 1.4.418.419.929.558 1.4.6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 10 6.5-2.5 2.188-2.651a1 1 0 0 1 1.479-.071l5.055 5.055a1 1 0 0 1-.07 1.479L18.5 13.5 16 20 5 21z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m13 7.5 5.5 5.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 3h6"
      />
    </svg>
  );
};
export default PenToolMinus;

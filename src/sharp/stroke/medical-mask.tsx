import React from "react";
const MedicalMask: React.FC<
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
        d="M10 8.5H8.707c-.453 0-.887.18-1.207.5m6.5-.5h1.293c.453 0 .887.18 1.207.5"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 12h-9v6h9zM7.5 13.5 2 12m14.5 1.5L22 12M7.5 17 3 16m13.5 1 4.5-1"
      />
    </svg>
  );
};
export default MedicalMask;

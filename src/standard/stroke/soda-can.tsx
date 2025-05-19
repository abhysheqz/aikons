import React from "react";
const SodaCan: React.FC<
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
        d="M5 5h14M5 19h14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 2h13"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.5 2 2.268 2.722a1 1 0 0 1 .232.64v13.276a1 1 0 0 1-.232.64L16.8 21.64a1 1 0 0 1-.768.36H7.968a1 1 0 0 1-.768-.36l-1.968-2.362a1 1 0 0 1-.232-.64V5.362a1 1 0 0 1 .232-.64L7.5 2"
      />
      <circle
        cx={12}
        cy={12}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default SodaCan;

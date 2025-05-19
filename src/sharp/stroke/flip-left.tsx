import React from "react";
const FlipLeft: React.FC<
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
        d="M6.999 2.999h2m-2 18.003h2m-4-18.003H2V6m0 12v3.002l3-.017M2 8v3m0 2v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.996 2.999H21.9a.1.1 0 0 1 .1.1v17.803a.1.1 0 0 1-.1.1h-9.904z"
      />
    </svg>
  );
};
export default FlipLeft;

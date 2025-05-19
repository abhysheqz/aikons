import React from "react";
const HandPointingDown_04: React.FC<
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
        d="M14 11.645V13.5a1.5 1.5 0 0 1-1.5 1.5H11m6-4v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.267M11 15v-2.421M11 15v5a1.5 1.5 0 0 1-3 0v-5m9.324-2H18.5a1.5 1.5 0 0 0 1.5-1.5v-6a3 3 0 0 0-3-3H9.606a3 3 0 0 0-2.497 1.336L4.504 7.744A3 3 0 0 0 4 9.408v.35a3 3 0 0 0 .879 2.12L8 15m0-5v5"
      />
    </svg>
  );
};
export default HandPointingDown_04;

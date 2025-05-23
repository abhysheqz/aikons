import React from "react";
const Airplane_02: React.FC<
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
        d="M10 10.5 4 7l1.343-1.4a2.05 2.05 0 0 1 1.973-.532L13 6.5m.5 7.5 3.5 6 1.4-1.343a2.05 2.05 0 0 0 .532-1.973L17.5 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.661 4.823-7.143 8.648-3.012-.502L3 14.475l4.518 2.007L9.525 21l1.506-1.506-.502-3.012 8.648-7.143a5.02 5.02 0 0 0 1.417-5.847l-.026-.06-.06-.026a5.02 5.02 0 0 0-5.847 1.417"
      />
    </svg>
  );
};
export default Airplane_02;

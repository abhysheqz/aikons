import React from "react";
const Artboard: React.FC<
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
        d="M8 5.5V3m8 2.5V3M18.5 8H21m-2.5 8H21M8 21v-2.5m8 2.5v-2.5M3 8h2.5M3 16h2.5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M16 8H8v8h8z" />
    </svg>
  );
};
export default Artboard;

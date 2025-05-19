import React from "react";
const Gameboy: React.FC<
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
        d="M11.5 16.5H9m0 0H6.5m2.5 0V19m0-2.5V14M16 18v-3M21 2H3v20h18z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 6H7v5h10z" />
    </svg>
  );
};
export default Gameboy;

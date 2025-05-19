import React from "react";
const CircleArrowReload_01: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.4 7.5.915 1.17c.527.673.43.875-.418.875H9.6c-1.462 0-1.6.768-1.6 2.046M9.6 16.5l-.915-1.17c-.526-.673-.43-.876.418-.876H14.4c1.461 0 1.6-.767 1.6-2.045"
      />
    </svg>
  );
};
export default CircleArrowReload_01;

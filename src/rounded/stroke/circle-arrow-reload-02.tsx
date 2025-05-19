import React from "react";
const CircleArrowReload_02: React.FC<
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
        d="m16.5 9.6-1.17-.915c-.673-.526-.876-.43-.876.418V14.4c0 1.461-.767 1.6-2.045 1.6M7.5 14.4l1.17.915c.673.527.875.43.875-.418V9.6c0-1.462.768-1.6 2.046-1.6"
      />
    </svg>
  );
};
export default CircleArrowReload_02;

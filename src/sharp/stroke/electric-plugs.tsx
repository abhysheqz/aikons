import React from "react";
const ElectricPlugs: React.FC<
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
        d="M9 2v3M15 2v3M12 18v4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.5 15 2-3.5h-3l2-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.499 5h-13v6.5a6.5 6.5 0 0 0 13 0z"
      />
    </svg>
  );
};
export default ElectricPlugs;

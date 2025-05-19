import React from "react";
const ThreeDRotate: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12c5.185 4.827 14.464 4.388 20 .356"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.537 2c-4.548 4.5-5.053 15 .457 20"
      />
    </svg>
  );
};
export default ThreeDRotate;

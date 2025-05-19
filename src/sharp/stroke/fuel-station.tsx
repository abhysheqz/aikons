import React from "react";
const FuelStation: React.FC<
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
        strokeWidth={1.5}
        d="m10.5 11.5-2 3.5h3l-2 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9h12M4 21V3h12v18M2 21h16M16 14h3v2.5a1.5 1.5 0 0 0 3 0V10l-2-3h-2"
      />
    </svg>
  );
};
export default FuelStation;

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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 10h12M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 13-1.5 2.5h3L10 18M2 21h16M16 14h3v2.5a1.5 1.5 0 0 0 3 0V9l-1.224-2.447A1 1 0 0 0 19.882 6H19"
      />
    </svg>
  );
};
export default FuelStation;

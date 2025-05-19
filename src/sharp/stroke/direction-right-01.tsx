import React from "react";
const DirectionRight_01: React.FC<
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
        d="M9 2.75v18M5 20.75h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.003 4.741H8.996v7.018h6.993l3.03-3.524z"
      />
    </svg>
  );
};
export default DirectionRight_01;

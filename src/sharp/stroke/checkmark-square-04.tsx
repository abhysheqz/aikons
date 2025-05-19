import React from "react";
const CheckmarkSquare_04: React.FC<
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
        d="M21 10v11H3V3h12"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m8.5 10 3.5 3.5 9-10" />
    </svg>
  );
};
export default CheckmarkSquare_04;

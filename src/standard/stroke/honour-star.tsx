import React from "react";
const HonourStar: React.FC<
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
        d="M2.5 3.001h19M4.5 3v12.98l7.436 5.003a.1.1 0 0 0 .112 0L19.5 15.98V3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.55}
        d="M9.667 14 12 13.087l2.333.913-.291-2.435L15.5 9.74l-2.042-.609L12 7l-1.458 2.13-2.042.61 1.458 1.825z"
      />
    </svg>
  );
};
export default HonourStar;

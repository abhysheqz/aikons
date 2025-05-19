import React from "react";
const FallingStar: React.FC<
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
        strokeWidth={1.5}
        d="m22 2-8 8m2-8-5 5m9 3-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.55}
        d="m4 22 4-1.5 4 1.5-.5-4 2.5-3-3.5-1L8 10.5 5.5 14 2 15l2.5 3z"
      />
    </svg>
  );
};
export default FallingStar;

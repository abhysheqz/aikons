import React from "react";
const ArrowMoveLeftDown: React.FC<
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
        d="M13.006 16.982 17.028 21 21 17.02M7.005 3 3 6.987l3.991 3.99M3.41 6.988l13.499.024c.055 0 .12.045.12.1v13.416"
      />
    </svg>
  );
};
export default ArrowMoveLeftDown;

import React from "react";
const Cylinder_03: React.FC<
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
        d="M22 19c0 1.657-4.477 3-10 3S2 20.657 2 19s4.477-3 10-3 10 1.343 10 3ZM22 5c0 1.657-4.477 3-10 3S2 6.657 2 5s4.477-3 10-3 10 1.343 10 3ZM22 5v14M2 5v14"
      />
    </svg>
  );
};
export default Cylinder_03;

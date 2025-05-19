import React from "react";
const Asteroid_02: React.FC<
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
        d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM7 13l8-8m3-3-1.5 1.5M22 6l-3.5 3.5M11 16l3-3"
      />
    </svg>
  );
};
export default Asteroid_02;

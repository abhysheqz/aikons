import React from "react";
const Kurta_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.049 15H21.5l-2-11.5L15.006 2c-.502 1-1.504 1.5-2.506 1.5S10.496 3 9.994 2L5.5 3.5 3.5 15h3.451M16.5 6l2 16h-12l2-16M17.5 12H21M4 12h3.5M12.5 4v5"
      />
    </svg>
  );
};
export default Kurta_01;

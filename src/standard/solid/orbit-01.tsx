import React from "react";
const Orbit_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 1 0 8.956 8.099 1 1 0 0 1 1.99-.198Q23 11.444 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c2.528 0 4.859.854 6.716 2.288a3 3 0 1 1-1.428 1.428A8.96 8.96 0 0 0 12 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Orbit_01;

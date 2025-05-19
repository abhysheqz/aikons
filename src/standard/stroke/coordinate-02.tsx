import React from "react";
const Coordinate_02: React.FC<
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
        d="M13.5 2.5 12 4m0 0v2m0-2-1.5-1.5M2.5 13h3l-3 4h3M18.5 13.5l3 3m0-3-3 3M12 8.5V16m0 0-8.5 5.5M12 16l8.5 5.5"
      />
    </svg>
  );
};
export default Coordinate_02;

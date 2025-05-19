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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 2-2 2m0 0v2.5M12 4l-2-2M2 13h3.5l-3 4H6M18 13l4 4m0-4-4 4M12 8v8m0 0-9 6m9-6 9 6"
      />
    </svg>
  );
};
export default Coordinate_02;

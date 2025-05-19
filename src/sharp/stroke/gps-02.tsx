import React from "react";
const Gps_02: React.FC<
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
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM22 12h-2M4 12H2M12 2v2M12 20v2"
      />
    </svg>
  );
};
export default Gps_02;

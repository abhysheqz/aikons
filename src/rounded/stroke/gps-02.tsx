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
        strokeWidth={1.5}
        d="M20.514 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.5 12h-2M3.5 12h-2M12 1.5v2M12 20.5v2"
      />
    </svg>
  );
};
export default Gps_02;

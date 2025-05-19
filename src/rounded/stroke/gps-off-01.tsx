import React from "react";
const GpsOff_01: React.FC<
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
        d="M18.017 18.017a8.5 8.5 0 0 1-12.02-12.02"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.5 12h-2M3.5 12h-2M12 1.5v2M12 20.5v2M2 2l20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.336 4.323a8.6 8.6 0 0 1 3.678-.823c4.695 0 8.5 3.75 8.5 8.375a8.24 8.24 0 0 1-.834 3.625"
      />
    </svg>
  );
};
export default GpsOff_01;

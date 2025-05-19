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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 4.804A8 8 0 0 1 19.196 15.5M6.19 6.5A8 8 0 0 0 17.5 17.81M22 12h-2M4 12H2M12 2v2m0 16v2M2 2l20 20"
      />
    </svg>
  );
};
export default GpsOff_01;

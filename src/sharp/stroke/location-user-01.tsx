import React from "react";
const LocationUser_01: React.FC<
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
        d="M18 16v-2a6 6 0 0 0-12 0v2h2.5l1.5 6h4l1.5-6z"
      />
      <circle cx={12} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default LocationUser_01;

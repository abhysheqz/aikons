import React from "react";
const ParkingAreaCircle: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 13V8.4c0-.372 0-.558.049-.709a1 1 0 0 1 .642-.642C9.841 7 10.028 7 10.4 7H13a3 3 0 1 1 0 6zm0 0v5"
      />
    </svg>
  );
};
export default ParkingAreaCircle;

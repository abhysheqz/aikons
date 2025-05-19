import React from "react";
const ParkingAreaSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm4 3.75a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-4h3a4 4 0 0 0 0-8zm4 6h-3v-4h3a2 2 0 1 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ParkingAreaSquare;

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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9 6a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-4h3a4 4 0 0 0 0-8zm4 6h-3V8h3a2 2 0 1 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ParkingAreaCircle;

import React from "react";
const CableCar: React.FC<
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
        d="M6 8h12l2 8-1 6H5l-1-6zM4 2h10m6 0h-6m0 0-2 3.5m-3 0h6M4.5 16h15M12 8v8"
      />
    </svg>
  );
};
export default CableCar;

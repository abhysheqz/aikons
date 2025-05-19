import React from "react";
const MarketOrder: React.FC<
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
        d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 1.968 3.446l-4.26 4.261a1 1 0 0 1-1.415-1.414l4.26-4.261A4 4 0 0 1 8 10m14-.01a1 1 0 1 0-2 0V10a1 1 0 1 0 2 0zM19 10a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zM3 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m3 .01a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1m7 .98a1 1 0 1 0-2 0V10a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MarketOrder;

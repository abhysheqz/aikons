import React from "react";
const Truck: React.FC<
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
      <circle cx={17} cy={18} r={2.5} fill="currentColor" />
      <circle cx={7} cy={18} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1h3.039a3 3 0 0 1 2.342 1.126l2.962 3.702A3 3 0 0 1 23 12.702V17a2 2 0 0 1-2 2h-.333A3.804 3.804 0 0 0 17 14.2a3.8 3.8 0 0 0-3.667 4.8h-2.666A3.804 3.804 0 0 0 7 14.2 3.8 3.8 0 0 0 3.333 19H3a2 2 0 0 1-2-2zm18.92 6-2.1-2.625A1 1 0 0 0 17.039 8h-2.413l1.238 2.451a1 1 0 0 0 .893.549z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Truck;

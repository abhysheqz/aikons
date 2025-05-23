import React from "react";
const RightToLeftListNumber: React.FC<
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
        strokeWidth={1.5}
        d="M3 6h10M3 12h10M3 18h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 15h1.5c.279 0 .418 0 .534.023a1.2 1.2 0 0 1 .943.943c.023.116.023.255.023.534s0 .418-.023.534a1.2 1.2 0 0 1-.943.943C19.918 18 19.78 18 19.5 18s-.418 0-.534.023a1.2 1.2 0 0 0-.943.943C18 19.082 18 19.22 18 19.5v.9c0 .283 0 .424.088.512s.23.088.512.088H21M18 3h1.2a.3.3 0 0 1 .3.3V9m0 0H18m1.5 0H21"
      />
    </svg>
  );
};
export default RightToLeftListNumber;

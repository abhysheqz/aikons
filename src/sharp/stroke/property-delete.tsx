import React from "react";
const PropertyDelete: React.FC<
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
        d="m15 15 3.5 3.5m0 0L22 22m-3.5-3.5L15 22m3.5-3.5L22 15M20 13V2H2v18h11M2 7h18M10 15.5h3m-7 0h2m2-4h6m-10 0h2"
      />
    </svg>
  );
};
export default PropertyDelete;

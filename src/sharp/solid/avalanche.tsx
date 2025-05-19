import React from "react";
const Avalanche: React.FC<
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
        d="m11.361 8.555-2-3 1.664-1.11 2 3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.08 2.684a.975.975 0 0 0-1.622 0l-3.21 4.814 1.166 2.914a.975.975 0 0 0 1.34.51l1.515-.757 1.514.757a.975.975 0 0 0 1.341-.51l.287-.716L15.147 19.8H1.248v1.95h18.38a.8.8 0 0 0 .19-.024c1.658-.435 2.933-1.875 2.933-3.647 0-1.892-1.446-3.396-3.272-3.72-.197-2.312-2.315-4.109-4.716-4.109-.721 0-1.511.141-2.207.434-.287.12-.573.273-.834.462z"
      />
    </svg>
  );
};
export default Avalanche;

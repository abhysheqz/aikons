import React from "react";
const PackageSearch: React.FC<
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
        d="M10.979 1.334a.98.98 0 0 1 .792 0l8.775 3.9q.126.056.229.142a.75.75 0 0 1 .354.638v7.316a5.25 5.25 0 1 0-6.593 8.087l-2.856 1.268a.75.75 0 0 1-.61 0l-8.996-4A.75.75 0 0 1 1.63 18V6.212a1 1 0 0 1 0-.174V6a.75.75 0 0 1 .39-.659 1 1 0 0 1 .185-.107zM5.001 6.125l1.815.807 6.374-2.833-1.815-.807zm6.374 2.833-2.097-.932 6.375-2.833 2.096.932zm-6.696 1.763a.75.75 0 0 1 .975-.417l2.5 1a.75.75 0 1 1-.557 1.392l-2.5-1a.75.75 0 0 1-.418-.975M17.375 13a4 4 0 1 0 2.032 7.446l1.26 1.261a1 1 0 0 0 1.415-1.414l-1.261-1.261A4 4 0 0 0 17.375 13m-2 4a2 2 0 1 1 3.6 1.2q-.085.114-.186.214A2 2 0 0 1 15.375 17"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageSearch;

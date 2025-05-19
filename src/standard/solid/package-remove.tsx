import React from "react";
const PackageRemove: React.FC<
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
        d="M10.979 1.334a.98.98 0 0 1 .792 0l8.775 3.9q.126.056.229.142a.75.75 0 0 1 .354.638v5.75a2.24 2.24 0 0 0-1.345.645l-.909.909-.909-.909a2.25 2.25 0 1 0-3.182 3.182l.909.909-.909.909a2.25 2.25 0 0 0 .62 3.622l-3.724 1.654a.75.75 0 0 1-.61 0l-8.996-4A.75.75 0 0 1 1.63 18V6.212a1 1 0 0 1 0-.174V6a.75.75 0 0 1 .39-.659 1 1 0 0 1 .185-.107zM5.001 6.125l1.815.807 6.374-2.833-1.815-.807zm6.374 2.833-2.097-.932 6.375-2.833 2.096.932zm-6.696 1.763a.75.75 0 0 1 .975-.417l2.5 1a.75.75 0 1 1-.557 1.392l-2.5-1a.75.75 0 0 1-.418-.975m12.403 2.572a1 1 0 0 0-1.414 1.414L17.46 16.5l-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L20.29 16.5l1.793-1.793a1 1 0 0 0-1.414-1.414l-1.793 1.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageRemove;

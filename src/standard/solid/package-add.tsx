import React from "react";
const PackageAdd: React.FC<
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
        d="M10.979 1.334a.98.98 0 0 1 .792 0l8.775 3.9q.126.056.229.142a.75.75 0 0 1 .354.638v8.736h-.504V14a2.25 2.25 0 0 0-4.5 0v.75h-.75a2.25 2.25 0 0 0 0 4.5h.75V20q.001.35.1.666l-4.546 2.02a.75.75 0 0 1-.609 0l-8.996-4A.75.75 0 0 1 1.63 18V6.212a1 1 0 0 1 0-.174V6a.75.75 0 0 1 .39-.659 1 1 0 0 1 .185-.107zM5.001 6.125l1.815.807 6.374-2.833-1.815-.807zm6.374 2.833-2.097-.932 6.375-2.833 2.096.932zm-6.696 1.763a.75.75 0 0 1 .975-.417l2.5 1a.75.75 0 1 1-.557 1.392l-2.5-1a.75.75 0 0 1-.418-.975M19.375 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageAdd;

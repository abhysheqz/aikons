import React from "react";
const Package: React.FC<
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
        d="M11.602 1.334a.98.98 0 0 1 .792 0l8.775 3.9q.126.056.229.142a.75.75 0 0 1 .354.638V18a.75.75 0 0 1-.446.685l-9.003 4a.75.75 0 0 1-.61 0l-8.996-4A.75.75 0 0 1 2.252 18V6.212a1 1 0 0 1 0-.174V6a.75.75 0 0 1 .39-.659 1 1 0 0 1 .185-.107zM5.624 6.125l1.815.807 6.374-2.833-1.815-.807zm6.374 2.833-2.097-.932 6.375-2.833 2.096.932zm-6.696 1.763a.75.75 0 0 1 .975-.417l2.5 1a.75.75 0 1 1-.557 1.392l-2.5-1a.75.75 0 0 1-.418-.975"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Package;

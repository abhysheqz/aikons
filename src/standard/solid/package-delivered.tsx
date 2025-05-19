import React from "react";
const PackageDelivered: React.FC<
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
        d="M10.478 1.334a.98.98 0 0 1 .792 0l8.775 3.9q.126.056.229.142a.75.75 0 0 1 .354.638v5.82c-.25.143-.478.332-.673.566l-3.247 3.897-.564-.565a2.5 2.5 0 0 0-3.536 3.536l1.927 1.926-3.357 1.491a.75.75 0 0 1-.609 0l-8.996-4A.75.75 0 0 1 1.128 18V6.212a1 1 0 0 1 0-.174V6a.75.75 0 0 1 .39-.659 1 1 0 0 1 .185-.107zM4.5 6.125l1.815.807 6.374-2.833-1.815-.807zm6.374 2.833-2.097-.932 6.375-2.833 2.096.932zM3.93 11.722a.75.75 0 0 1 .974-.418l2.5 1a.75.75 0 0 1-.557 1.392l-2.5-1a.75.75 0 0 1-.417-.974m18.714 2.918a1 1 0 0 0-1.536-1.28l-4.3 5.159-1.725-1.726a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.475-.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageDelivered;

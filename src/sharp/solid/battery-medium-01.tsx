import React from "react";
const BatteryMedium_01: React.FC<
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
        d="M2 5.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75v-2.866l3-.507V9.373l-3-.507V6a.75.75 0 0 0-.75-.75zm17.75 5.137v3.226l1.5-.253v-2.72zM5.25 15V9h1.5v6zm3-6v6h1.5V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryMedium_01;

import React from "react";
const DistributeHorizontalCenter: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5V2m0 17v3M17 8.002c.844 0 1.818-.083 2.299.75.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75c-.201-.348-.201-.815-.201-1.75v-3c0-.934 0-1.402.201-1.75.481-.833 1.455-.75 2.299-.75M7 5.002c.844 0 1.818-.083 2.299.75.201.348.201.816.201 1.75v9c0 .935 0 1.402-.201 1.75-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75c-.201-.348-.201-.815-.201-1.75v-9c0-.934 0-1.402.201-1.75.481-.833 1.455-.75 2.299-.75M17 8V2m0 14v6"
      />
    </svg>
  );
};
export default DistributeHorizontalCenter;

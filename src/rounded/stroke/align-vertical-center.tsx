import React from "react";
const AlignVerticalCenter: React.FC<
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
        d="M16.5 8.002c.844 0 1.818-.083 2.299.75.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C14 14.904 14 14.437 14 13.502v-3c0-.934 0-1.402.201-1.75.481-.833 1.455-.75 2.299-.75M7.5 4.002c.844 0 1.818-.083 2.299.75.201.348.201.816.201 1.75v11c0 .935 0 1.402-.201 1.75-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C5 18.904 5 18.437 5 17.502v-11c0-.934 0-1.402.201-1.75.481-.833 1.455-.75 2.299-.75M5 12H2M14 12h-4M22 12h-3"
      />
    </svg>
  );
};
export default AlignVerticalCenter;

import React from "react";
const DistributeVerticalCenter: React.FC<
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
        d="M5 17H2m17 0h3M8.002 7c0-.844-.083-1.818.75-2.299.348-.201.816-.201 1.75-.201h3c.935 0 1.402 0 1.75.201.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201-.833-.481-.75-1.455-.75-2.299M5.002 17c0-.844-.083-1.818.75-2.299.348-.201.816-.201 1.75-.201h9c.935 0 1.402 0 1.75.201.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-9c-.934 0-1.402 0-1.75-.201-.833-.481-.75-1.455-.75-2.299M8 7H2m14 0h6"
      />
    </svg>
  );
};
export default DistributeVerticalCenter;

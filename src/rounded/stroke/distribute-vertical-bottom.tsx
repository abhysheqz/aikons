import React from "react";
const DistributeVerticalBottom: React.FC<
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
        d="M2 22h20M2 10h20M8.002 4.5c0 .844-.083 1.818.75 2.299C9.1 7 9.568 7 10.502 7h3c.935 0 1.402 0 1.75-.201.834-.481.75-1.455.75-2.299s.084-1.818-.75-2.299C14.904 2 14.437 2 13.502 2h-3c-.934 0-1.402 0-1.75.201-.833.481-.75 1.455-.75 2.299M5.002 16.5c0 .844-.083 1.818.75 2.299.348.201.816.201 1.75.201h9c.935 0 1.402 0 1.75-.201.834-.481.75-1.455.75-2.299s.084-1.818-.75-2.299C17.904 14 17.437 14 16.502 14h-9c-.934 0-1.402 0-1.75.201-.833.481-.75 1.455-.75 2.299"
      />
    </svg>
  );
};
export default DistributeVerticalBottom;

import React from "react";
const DistributeVerticalTop: React.FC<
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
        d="M2 2h20M2 14h20M8.002 7.5c0-.844-.083-1.818.75-2.299C9.1 5 9.568 5 10.502 5h3c.935 0 1.402 0 1.75.201.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201-.833-.481-.75-1.455-.75-2.299M5.002 19.5c0-.844-.083-1.818.75-2.299C6.1 17 6.568 17 7.502 17h9c.935 0 1.402 0 1.75.201.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-9c-.934 0-1.402 0-1.75-.201-.833-.481-.75-1.455-.75-2.299"
      />
    </svg>
  );
};
export default DistributeVerticalTop;

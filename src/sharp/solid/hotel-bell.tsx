import React from "react";
const HotelBell: React.FC<
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
        d="M15.5 2.75h-7v2H11v1.057a8.75 8.75 0 0 0-7.727 8.05 2.52 2.52 0 0 0-1.754 1.968L1.25 17.75h21.5l-.269-1.925a2.52 2.52 0 0 0-1.754-1.968A8.75 8.75 0 0 0 13 5.807V4.75h2.5zM1.25 19.25h21.5v2H1.25zm19-14.195-.948 1.894-1.788-.894.947-1.895zm2.5 3.394-1.893.947-.896-1.788 1.894-.948zM6.486 6.055 5.54 4.16l-1.789.895.947 1.894zM4.038 7.608 2.145 6.66 1.25 8.449l1.893.947z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotelBell;

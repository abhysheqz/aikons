import React from "react";
const CheckUnread_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m5 14 3.5 3.5 4.296-4.5M19 6.5l-4.151 4.349M5 5l14 14"
      />
    </svg>
  );
};
export default CheckUnread_03;

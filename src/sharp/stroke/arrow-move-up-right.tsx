import React from "react";
const ArrowMoveUpRight: React.FC<
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
        strokeWidth={1.5}
        d="M15.017 10.941 19 6.971 15.017 3M5 21V7.09c0-.056.045-.12.1-.12h13.614"
      />
    </svg>
  );
};
export default ArrowMoveUpRight;

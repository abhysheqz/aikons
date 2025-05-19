import React from "react";
const ArrowMoveUpLeft: React.FC<
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
        d="M8.983 10.941 5 6.971 8.983 3M19 21V7.09c0-.056-.045-.12-.1-.12H5.29"
      />
    </svg>
  );
};
export default ArrowMoveUpLeft;

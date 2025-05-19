import React from "react";
const ArrowMoveRightDown: React.FC<
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
        d="M10.994 16.982 6.971 21 3 17.02M16.995 3 21 6.987l-3.991 3.99m3.663-3.99L7.09 7.011c-.055 0-.12.045-.12.1v13.56"
      />
    </svg>
  );
};
export default ArrowMoveRightDown;

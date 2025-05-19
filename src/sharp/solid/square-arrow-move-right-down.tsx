import React from "react";
const SquareArrowMoveRightDown: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7.25 8h4.937l-1.219 1.22 1.062 1.06 3.025-3.03-3.025-3.03-1.062 1.06 1.219 1.22H9.5a.75.75 0 0 0-.75.75l-.003 5.691-1.221-1.221-1.061 1.06 3.03 3.03 3.03-3.03-1.06-1.06-1.218 1.217z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveRightDown;

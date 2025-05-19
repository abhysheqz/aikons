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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm9.97 5.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.691c-.69 0-1.25.56-1.25 1.25l-.002 3.692.723-.722a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-.532.22h-.002a.75.75 0 0 1-.574-.267L6.97 15.53a.75.75 0 1 1 1.06-1.06l.717.716.002-3.687a2.75 2.75 0 0 1 2.75-2.749h3.69l-.72-.72a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveRightDown;

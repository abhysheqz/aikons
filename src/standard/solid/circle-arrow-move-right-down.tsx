import React from "react";
const CircleArrowMoveRightDown: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.03 6.22a.75.75 0 1 0-1.06 1.06l.72.72h-3.687a1.75 1.75 0 0 0-1.75 1.749L9.25 14.69l-.72-.72a.75.75 0 0 0-1.061 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.719.003-3.69a.25.25 0 0 1 .25-.249h3.686l-.72.72a.75.75 0 1 0 1.061 1.06l2-2a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowMoveRightDown;

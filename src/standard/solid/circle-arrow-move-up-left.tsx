import React from "react";
const CircleArrowMoveUpLeft: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.47 6.22a.75.75 0 0 0-1.06 0L8.307 9.713a.75.75 0 0 0 .163.817l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H13c.69 0 1.25.56 1.25 1.25v4a.75.75 0 0 0 1.5 0v-4A2.75 2.75 0 0 0 13 9.25h-2.19l.72-.72a.75.75 0 0 0 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowMoveUpLeft;

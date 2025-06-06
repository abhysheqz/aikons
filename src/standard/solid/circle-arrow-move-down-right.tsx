import React from "react";
const CircleArrowMoveDownRight: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-3 6a.75.75 0 0 1 .75.75v4c0 .69.56 1.25 1.25 1.25h2.19l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H11A2.75 2.75 0 0 1 8.25 12V8A.75.75 0 0 1 9 7.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowMoveDownRight;

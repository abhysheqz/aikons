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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.25 8v6c0 .414.336.75.75.75h4.19l-.72.72 1.06 1.06L16.06 14l-2.53-2.53-1.06 1.06.72.72H9.75V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowMoveDownRight;

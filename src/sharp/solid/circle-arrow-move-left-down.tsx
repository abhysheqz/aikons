import React from "react";
const CircleArrowMoveLeftDown: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.53 8.53 8.47 7.47 5.94 10l2.53 2.53 1.06-1.06-.72-.72h4.44v4.44l-.72-.72-1.06 1.06L14 18.06l2.53-2.53-1.06-1.06-.72.72V10a.75.75 0 0 0-.75-.75H8.81z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowMoveLeftDown;

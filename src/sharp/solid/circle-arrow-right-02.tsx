import React from "react";
const CircleArrowRight_02: React.FC<
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
        d="M12 1.25C6.062 1.25 1.25 6.062 1.25 12S6.062 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1 14.279 3.53-3.53L13 8.469l-1.061 1.06 1.72 1.72h-6.19v1.5h6.19l-1.72 1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowRight_02;

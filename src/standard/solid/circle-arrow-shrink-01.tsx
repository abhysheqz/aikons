import React from "react";
const CircleArrowShrink_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M6.97 6.97a.75.75 0 0 1 1.06 0l2.22 2.22V7.5a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1 0-1.5h1.69L6.97 8.03a.75.75 0 0 1 0-1.06M12.25 13a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowShrink_01;
